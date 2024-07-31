import { makeListUsersUseCase } from '@/use-cases/factories/make-list-users-use-case';
import { FastifyRequest, FastifyReply } from 'fastify';

export async function listUsers(req: FastifyRequest, res: FastifyReply) {
    const listUsersUseCase = makeListUsersUseCase();
    const users = await listUsersUseCase.execute();

    return res.status(200).send(users);
}
