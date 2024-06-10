import { User } from './user';

export type TripProps = {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    travelers: User[] | [];
    attractions: [];
    accommodations: [];
};

export class Trip {
    private constructor(readonly props: TripProps) {}

    public static create(
        title: string,
        startDate: Date,
        endDate: Date,
        travelers: User[] | [],
        attractions: [],
        accommodations: []
    ) {
        return new Trip({
            id: crypto.randomUUID().toString(),
            title,
            startDate,
            endDate,
            travelers,
            attractions,
            accommodations,
        });
    }

    public static addTraveler(user: User) {
        this.props.travelers.push(user);
    }

    public static removeTraveler(user: User) {
        this.props.travelers = this.props.travelers.filter(
            (traveler) => traveler.id !== user.id
        );
    }

    public static addAttraction(attraction: []) {
        this.props.attractions.push(attraction);
    }

    public static removeAttraction(attraction: []) {
        this.props.attractions = this.props.attractions.filter(
            (attraction) => attraction !== attraction
        );
    }

    public static addAccommodation(accommodation: []) {
        this.props.accommodations.push(accommodation);
    }

    public static removeAccommodation(accommodation: []) {
        this.props.accommodations = this.props.accommodations.filter(
            (accommodation) => accommodation !== accommodation
        );
    }
}
