import { IUser } from "src/models";

export const FAKE_USERS: IUser[] = [
    {id:"111", login: 'hodor', password: 'hodor', name: 'HoDor', location: {x: 123, y: 123}}, 
    {id:"222", login: 'john', password:'doe', name: 'John Doe', location: {x: 456, y: 456}}
]