export interface Trip {
    save(trip: Trip): Promise<void>;
    findById(id: string): Promise<Trip | null>;
    findByUserId(userId: string): Promise<Trip[] | []>;
    update(trip: Trip): Promise<void>;
    delete(id: string): Promise<void>;
    list(): Promise<Trip[] | null>;
}
