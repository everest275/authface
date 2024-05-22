// src/classes/User.ts
import { IUser } from './interface';

export default class User implements IUser {
    email: string;
    name: string;
    pash: string;

    constructor(name: string, email: string, pash: string) {
        this.name = name;
        this.email = email;
        this.pash = pash;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    getPash(): string {
        return this.pash;
    }

    getUserDetails(): string {
        return `User details: Name: ${this.name}, Email: ${this.email}`;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPash(pash: string): void {
        this.pash = pash;
    }
}
