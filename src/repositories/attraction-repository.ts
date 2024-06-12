import { Prisma, Attraction, AttractionTag } from '@prisma/client';

export interface AttractionRepository {
    save(data: Prisma.AttractionCreateInput): Promise<Attraction>;
    update(data: Prisma.AttractionUpdateInput): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Attraction | null>;
    list(): Promise<Attraction[] | null>;
    findByTripId(tripId: string): Promise<Attraction[] | null>;
    findByTripIdOnDate(
        tripId: string,
        date: Date
    ): Promise<Attraction[] | null>;
    addToTrip(id: string, tripId: string): Promise<void>;
    removeFromTrip(id: string, tripId: string): Promise<void>;
    addTag(tags: AttractionTag): Promise<void>;
    removeTag(tags: AttractionTag): Promise<void>;
}
