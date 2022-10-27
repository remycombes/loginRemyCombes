import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/models';
import { FAKE_USERS } from './FAKE-DATA';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(login: string, password: string) : Observable<IUser>{
    console.log(FAKE_USERS);
    let user: IUser = FAKE_USERS.find((user)=>{return(user.login===login && password===password)}); 
    return of(user); 
  }

  // public addAccount(login: string, password: string): Observable<IUser>{
  //   let user: IUser = FAKE_USERS.find((user)=>{user.login===login && password===password}); 
  //   if(!user){
  //     return of({})
  //   }
  //   return of(null); 
  // }; 

  // public setAccount(): Observable<IUser>{

  // }
}
