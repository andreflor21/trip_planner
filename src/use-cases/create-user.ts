import { UserRepository } from '@/repositories/user-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

import { User } from '@prisma/client';
import { hash } from 'bcryptjs';

interface CreateUserUseCaseRequest {
    name: string;
    email: string;
    password: string;
    age: number | null;
    birthDate: Date | null;
}

interface CreateUserUseCaseResponse {
    user: User;
}

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute({
        name,
        email,
        password,
        age,
        birthDate,
    }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const password_hash = await hash(password, 6);

        const userWithSameEmail = await this.userRepository.findByEmail(email);

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError();
        }

        const user = await this.userRepository.create({
            name,
            email,
            age,
            birthdate: birthDate ? birthDate : null,
            password: password_hash,
        });

        return { user };
    }
}
