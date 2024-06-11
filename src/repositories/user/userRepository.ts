import { User } from '../../entities/user';

export interface UserRepository {
    save(user: User): Promise<void>;
    list(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    update(user: User): Promise<void>;
    addTrip(tripId: string, user: User): Promise<void>;
    removeTrip(tripId: string, user: User): Promise<void>;
    remove(user: User): Promise<void>;
}
