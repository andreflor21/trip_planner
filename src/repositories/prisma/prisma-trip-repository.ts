import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

import { TripRepository } from '../trip-repository';
import { TripNotFoundError } from '@/use-cases/errors/trip-not-found-error';
import { TripNotFoundInUserError } from '@/use-cases/errors/trip-not-found-in-user-error';
import { UserNotFoundError } from '@/use-cases/errors/user-not-found-error';

export class PrismaTripRepository implements TripRepository {
    async save(data: Prisma.TripCreateInput) {
        const trip = await prisma.trip.create({
            data,
        });

        return trip;
    }

    async findById(id: string) {
        const trip = await prisma.trip.findUnique({
            where: {
                id,
            },
        });
        if (!trip) throw new TripNotFoundError();

        return trip;
    }

    async findByUserId(userId: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                trips: true,
            },
        });

        if (!user) throw new UserNotFoundError();

        return user.trips;
    }

    async update(id: string, data: Prisma.TripUpdateInput) {
        const trip = await prisma.trip.update({
            where: {
                id: id,
            },
            data,
        });

        return;
    }

    async delete(id: string) {
        const trip = await prisma.trip.delete({ where: { id } });
        return;
    }

    async list() {
        const trips = await prisma.trip.findMany();

        return trips;
    }
}
