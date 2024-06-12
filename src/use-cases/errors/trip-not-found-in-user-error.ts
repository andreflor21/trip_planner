export class TripNotFoundInUserError extends Error {
    constructor(userId: string) {
        super('Trip not linked to the user with id: ' + userId);
    }
}
