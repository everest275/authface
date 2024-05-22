import { IUser } from './interface'
export default class User implements IUser {
    user_id: Number;
    user_name: String;
    user_email: String;
    user_pash: String;
    membership_id: Number;
    state_id: Number;
    created_date: Date;
    updated_date: Date;

    constructor(user_id: Number, user_name: string, user_email: string, user_pash: string, membership_id: Number, state_id: Number, created_date: Date, updated_date: Date) {
        this.user_id = user_id
        this.user_email = user_email
        this.user_name = user_name;
        this.user_pash = user_pash
        this.membership_id = membership_id;
        this.state_id = state_id
        this.created_date = created_date
        this.updated_date = updated_date
    }
    getUserId(): Number {
        return this.user_id
    }
    getUserEmail(): String {
        return this.user_email
    }
    getUserName(): String {
        return this.user_name
    }
    getUserPash(): String {
        return this.user_pash
    }
    getMembershipId(): Number {
        return this.membership_id
    }
    getStateId(): Number {
        return this.state_id
    }
    getUpdatedDate(): Date {
        return this.updated_date
    }
    getCreatedDate(): Date {
        return this.updated_date
    }
    
    setUserId(user_id: Number): void {
        this.user_id = user_id;
    } 
    setUserName(user_name: String): void {
        this.user_name = user_name;
    }    
    setUserEmail(user_email: String): void {
        this.user_email = user_email;
    }
    setUserPash(user_pash: String): void {
        this.user_pash = user_pash;
    }
    setMembershipId(membership_id: Number): void {
        this.membership_id = membership_id;
    }
    setStateId(state_id: Number): void {
        this.state_id = state_id;
    }
    setCreatedDate(): void {
        this.updated_date = new Date();
    }
    setUpdatedDate(): void {
        this.updated_date = new Date();
    }

}
