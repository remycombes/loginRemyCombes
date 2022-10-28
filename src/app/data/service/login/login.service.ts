import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { IUser } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  ////////////////////////////////////////////////////////////////////////////////
  // FAKE USER DATA //////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  USER_LIST : IUser[]=[
    {id:"111", login: 'remy', password: 'remy', name: 'Remy Combes', location: {x: 123, y: 123}, email: 'remycombes@aze.rty'}, 
    {id:"222", login: 'peter', password: 'peter', name: 'Peter Smith', location: {x: 123, y: 123}, email: 'peterSmith@aaa.aaa'}, 
    {id:"333", login: 'john', password:'john', name: 'John Doe', location: {x: 456, y: 456}, email: 'johnDoe@bbb.bbb'}
  ];

  ////////////////////////////////////////////////////////////////////////////////
  // LOGIN ///////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  public login(login: string, password: string) : Observable<IUser>{
    let user: IUser = this.USER_LIST.find((user)=>{
      return(user.login===login && password===password)
    }); 
    if(user){return of(user).pipe(delay(2000));}
    return throwError(()=>{new Error('login error');}); 
  }

  ////////////////////////////////////////////////////////////////////////////////
  // ADD USER ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  public addUser(user: IUser) : Observable<IUser>{
    let userFound: IUser = this.USER_LIST.find((u)=>{
      return(u.login===user.login)
    }); 
    if(!userFound){
      this.USER_LIST.push({...user, location: {x:0,y:0}});
      return of(user).pipe(delay(2000));
    }
    return throwError(()=>{new Error('user edition error');}); 
  }

  ////////////////////////////////////////////////////////////////////////////////
  // EDIT USER DATA //////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  public editUser(user: IUser) : Observable<IUser>{
    let userFound: IUser = this.USER_LIST.find((user)=>{
      return(user.login===user.login)
    }); 
    if(userFound){return of(user).pipe(delay(2000));}
    return throwError(()=>{new Error('user edition error');}); 
  }
}
