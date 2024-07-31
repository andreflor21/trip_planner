import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { ListUsersUseCase } from '../list-users';

export function makeListUsersUseCase() {
    const userRepository = new PrismaUserRepository();
    const listUsersUseCase = new ListUsersUseCase(userRepository);

    return listUsersUseCase;
}
