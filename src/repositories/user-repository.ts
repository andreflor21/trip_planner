import { User, Prisma } from '@prisma/client';

export interface UserRepository {
    create(data: Prisma.UserCreateInput): Promise<User>;
    list(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    addTrip(userId: string, tripId: string): Promise<void>;
    removeTrip(userId: string, tripId: string): Promise<void>;
    remove(userId: string): Promise<void>;
}
