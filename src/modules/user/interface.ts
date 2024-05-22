// src/interfaces/component.interface.ts
export interface IUser {
    user_id: Number;
    user_email: String;
    user_name: String;
    user_pash: String;
    membership_id: Number;
    state_id: Number;
    created_date:Date;
    updated_date:Date;

    getUserId(): Number;
    getUserEmail(): String;
    getUserName(): String;
    getUserPash(): String;
    getMembershipId(): Number;
    getStateId(): Number;
    getCreatedDate(): Date;
    getUpdatedDate(): Date;

    setUserId(user_id: Number): void;
    setUserEmail(user_email: String): void;
    setUserName(user_name: String): void;
    setUserPash(user_pash: String): void;
    setMembershipId(membership_id: Number): void;
    setStateId(state_id: Number): void;
    setCreatedDate(updated_date: Date): void;
    setUpdatedDate(updated_date: Date): void;

}

