import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthActionsTypes, LoginAction, LoginSuccessAction } from './auth.actions';

import { LoginService } from '../../data/service/login/login.service';
import { IUser } from 'src/models';
 
@Injectable()
export class AuthEffects {

  login$ = createEffect(
    () => this.actions$.pipe(
        ofType(AuthActionsTypes.LOGIN),
        exhaustMap(
            (action: LoginAction) => this.loginService.login(action.payload.username, action.payload.password).pipe(
                map((user: IUser) => {
                  console.log(user); 
                  return {type: AuthActionsTypes.LOGIN_SUCCES, payload: {user: user}}
                }),
                catchError(() => of({ type: AuthActionsTypes.LOGIN_FAILURE }))
            )
        )
    ),
    { useEffectsErrorHandler: false }
  );

  loginFailure$ = createEffect(
    () => this.actions$.pipe(
        ofType(AuthActionsTypes.LOGIN_FAILURE),
        map(()=>{return { type: AuthActionsTypes.LOGOUT }})
    ),
    { useEffectsErrorHandler: false }
  );
 
  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}