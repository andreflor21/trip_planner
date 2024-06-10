export type AccommodationProps = {
    id: string;
    name: string;
    address: string;
    checkIn: Date;
    checkOut: Date;
    nigths: number;
    price: number;
    comment: string | null;
    tripId: string;
};

export class Accommodation {
    private constructor(readonly props: AccommodationProps) {}

    public static create(
        tripId: string,
        name: string,
        address: string,
        checkIn: Date,
        checkOut: Date,
        nigths: number,
        price: number,
        comment: string | null
    ): Accommodation {
        const trip = tripRepository.findById(tripIp);
        if (!trip) {
            throw new Error('Trip not found');
        }

        return new Accommodation({
            id: crypto.randomUUID().toString(),
            name,
            address,
            checkIn,
            checkOut,
            nigths,
            price,
            tripId,
            comment: comment ? comment : null,
        });
    }
}
