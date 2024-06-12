import { UserRepository } from '@/repositories/user-repository';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';
import { User } from '@prisma/client';
import { compare } from 'bcryptjs';

interface AuthenticaticateUserRequest {
    email: string;
    password: string;
}

interface AuthenticaticateUserResponse {
    user: User;
}

export class AuthenticateUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute({
        email,
        password,
    }: AuthenticaticateUserRequest): Promise<AuthenticaticateUserResponse> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new InvalidCredentialsError();
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new InvalidCredentialsError();
        }

        return {
            user,
        };
    }
}
