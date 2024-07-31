import { TripRepository } from '@/repositories/trip-repository';
import { Trip } from '@prisma/client';

interface createTripUseCaseRequest {
    title: string;
    startDate: Date;
    endDate: Date;
    userId: string;
}

interface createTripUseCaseResponse {
    trip: Trip;
}

export class CreateTripUseCase {
    constructor(private tripRepository: TripRepository) {}

    async execute({
        title,
        startDate,
        endDate,
        userId,
    }: createTripUseCaseRequest): Promise<createTripUseCaseResponse> {
        const trip = await this.tripRepository.save({
            title,
            startDate,
            endDate,
            travelers: { connect: { id: userId } },
        });

        return { trip };
    }
}
