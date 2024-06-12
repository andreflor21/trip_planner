import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

import { UserRepository } from '../user-repository';
import { TripNotFoundError } from '@/use-cases/errors/trip-not-found-error';
import { TripNotFoundInUserError } from '@/use-cases/errors/trip-not-found-in-user-error';

export class PrismaUserRepository implements UserRepository {
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    async list() {
        const users = await prisma.user.findMany();

        return users;
    }

    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        return user;
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    }

    async update(id: string, data: Prisma.UserUpdateInput) {
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data,
        });

        return user;
    }

    async addTrip(userId: string, tripId: string) {
        const trip = await prisma.trip.findUnique({ where: { id: tripId } });
        if (!trip) throw new TripNotFoundError();

        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                trips: {
                    connect: {
                        id: tripId,
                    },
                },
            },
        });
    }

    async removeTrip(userId: string, tripId: string) {
        const trip = await prisma.trip.findUnique({
            where: { id: tripId, travelers: { some: { id: userId } } },
        });
        if (!trip) throw new TripNotFoundInUserError(userId);

        await prisma.user.update({
            where: { id: userId },
            data: { trips: { disconnect: { id: tripId } } },
        });
    }

    async remove(userId: string) {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });
    }
}
