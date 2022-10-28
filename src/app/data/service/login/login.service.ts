import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { IUser } from 'src/models';
import { FAKE_USERS } from './FAKE-DATA';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  USER_LIST : IUser[]=[
    {id:"111", login: 'remy', password: 'remy', name: 'Remy Combes', location: {x: 123, y: 123}, email: 'remycombes@aze.rty'}, 
    {id:"222", login: 'peter', password: 'peter', name: 'Peter Smith', location: {x: 123, y: 123}, email: 'peterSmith@aaa.aaa'}, 
    {id:"333", login: 'john', password:'john', name: 'John Doe', location: {x: 456, y: 456}, email: 'johnDoe@bbb.bbb'}
  ];

  public login(login: string, password: string) : Observable<IUser>{
    let user: IUser = this.USER_LIST.find((user)=>{
      return(user.login===login && password===password)
    }); 
    if(user){return of(user).pipe(delay(2000));}
    return throwError(()=>{new Error('login error');}); 
  }

  public editUser(oldUser: IUser, updatedUser: IUser) : Observable<IUser>{
    let user: IUser = {...oldUser, ...updatedUser}; 
    if(user){return of(user).pipe(delay(2000));}
    return throwError(()=>{new Error('user edition error');}); 
  }
}
