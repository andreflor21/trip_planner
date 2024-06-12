import { Prisma, Accommodation } from '@prisma/client';

export interface AccommodationRepository {
    save(data: Prisma.AccommodationCreateInput): Promise<Accommodation>;
    findById(id: string): Promise<Accommodation | null>;
    findByTripId(tripId: string): Promise<Accommodation[] | []>;
    update(data: Prisma.AccommodationUpdateInput): Promise<void>;
    delete(id: string): Promise<void>;
    list(): Promise<Accommodation[] | null>;
    addToTrip(id: string, tripId: string): Promise<void>;
    removeFromTrip(id: string, tripId: string): Promise<void>;
}
