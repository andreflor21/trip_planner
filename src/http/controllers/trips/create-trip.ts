import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateTripUseCase } from '@/use-cases/factories/make-create-trip-use-case';

export async function createTrip(req: FastifyRequest, res: FastifyReply) {
    const createTripBodySchema = z.object({
        userId: z.string(),
        title: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
    });

    const { userId, title, startDate, endDate } = createTripBodySchema.parse(
        req.body
    );

    try {
        const createTripUseCase = makeCreateTripUseCase();
        const trip = await createTripUseCase.execute({
            userId,
            title,
            startDate,
            endDate,
        });
        return res.status(201).send(trip);
    } catch (err) {
        throw err;
    }
}
