import { UserRepository } from '@/repositories/user-repository';
import { User } from '@prisma/client';

interface ListUsersUseCaseResponse {
    users: Omit<User, 'password'>[];
}

export class ListUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<ListUsersUseCaseResponse> {
        const users = await this.userRepository.list();

        return { users };
    }
}
