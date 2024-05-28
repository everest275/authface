// src/interfaces/component.interface.ts
export interface IUser {

    email: string;
    name: string;
    pash: string;

    getEmail(): string;
    getName(): string;
    getPash(): string;
    getUserDetails(): string;

    setEmail(email: string): void;
    setName(name: string): void;
    setPash(pash: string): void;
}

