import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '../create-user';

export function makeCreateUserUseCase() {
    const userRepository = new PrismaUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    return createUserUseCase;
}
