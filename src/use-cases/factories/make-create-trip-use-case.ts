import { PrismaTripRepository } from '@/repositories/prisma/prisma-trip-repository';
import { CreateTripUseCase } from '@/use-cases/create-trip';

export function makeCreateTripUseCase() {
    const tripRepository = new PrismaTripRepository();
    const tripUseCase = new CreateTripUseCase(tripRepository);

    return tripUseCase;
}
