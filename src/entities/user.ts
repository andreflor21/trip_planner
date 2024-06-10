import { pbkdf2Sync, randomBytes } from 'crypto';
import { Trip } from './trip';

export type UserProps = {
    id: string;
    name: string;
    email: string;
    age: number | null;
    birthDate: Date | null;
    password: string;
    trips: Trip[] | [];
};

export class User {
    private constructor(readonly props: UserProps) {}

    public static create(
        name: string,
        email: string,
        password: string,
        age: string | null,
        birthDate: Date | null
    ): User {
        const salt = randomBytes(128).toString('hex');
        const hash = pbkdf2Sync(
            password,
            salt,
            10000,
            512,
            'sha256'
        ).toString();
        return new User({
            id: crypto.randomUUID().toString(),
            name,
            email,
            age: age ? Number(age) : null,
            birthDate: birthDate ? birthDate : null,
            password: hash,
            trips: [],
        });
    }
}
