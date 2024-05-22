export interface IType {
    type_id: Number;
    type_name: String;
    type_description: String;
    state: Number;
    create_date: Date;

    getTypeId(): Number;
    getTypeName(): String;
    getTypeDescription(): String;
    getState(): Number;
    getCreateDate(): Date;

    setTypeId(email: Number): void;
    setTypeName(email: String): void;
    setTypeDescription(name: String): void;
    setState(pash: Number): void;
}
