import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';
import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user-use-case';

export async function createUser(req: FastifyRequest, res: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string().min(6),
        age: z.number().optional(),
        birthDate: z.date().optional(),
    });

    const { name, email, password, age, birthDate } = registerBodySchema.parse(
        req.body
    );

    try {
        const createUserUseCase = makeCreateUserUseCase();
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
            age: age ? age : null,
            birthDate: birthDate ? birthDate : null,
        });
    } catch (err) {
        if (err instanceof UserAlreadyExistsError) {
            return res.send(409).send({ message: err.message });
        }

        throw err;
    }
    return res.status(201).send();
}
