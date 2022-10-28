import { IUser } from "src/models";

export const FAKE_USERS: IUser[] = [
    {id:"111", login: 'remy', password: 'remy', name: 'Remy Combes', location: {x: 123, y: 123}, email: 'remycombes@aze.rty'}, 
    {id:"222", login: 'peter', password: 'peter', name: 'Peter Smith', location: {x: 123, y: 123}, email: 'peterSmith@aaa.aaa'}, 
    {id:"333", login: 'john', password:'john', name: 'John Doe', location: {x: 456, y: 456}, email: 'johnDoe@bbb.bbb'}
]