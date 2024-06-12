import { Prisma, Trip } from '@prisma/client';

export interface TripRepository {
    save(data: Prisma.TripCreateInput): Promise<Trip>;
    findById(id: string): Promise<Trip | null>;
    findByUserId(userId: string): Promise<Trip[] | []>;
    update(data: Prisma.TripUpdateInput): Promise<void>;
    delete(id: string): Promise<void>;
    list(): Promise<Trip[] | null>;
}
