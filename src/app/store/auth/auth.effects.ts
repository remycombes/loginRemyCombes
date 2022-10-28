import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AddUserAction, AuthActionsTypes, EditUserAction, LoginAction, LoginSuccessAction } from './auth.actions';

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
                  return {type: AuthActionsTypes.LOGIN_SUCCES, payload: {user: user}}
                }),
                catchError(() => of({ type: AuthActionsTypes.LOGIN_FAILURE }))
            )
        )
    ),
    { useEffectsErrorHandler: false }
  );

  adUser$ = createEffect(
    () => this.actions$.pipe(
        ofType(AuthActionsTypes.ADD_USER),
        exhaustMap(
            (action: AddUserAction) => this.loginService.addUser(action.payload.user).pipe(
                map((user: IUser) => {
                  return {type: AuthActionsTypes.ADD_USER_SUCCESS, payload: {user: user}}
                }),
                catchError(() => of({ type: AuthActionsTypes.ADD_USER_FAILURE }))
            )
        )
    ),
    { useEffectsErrorHandler: false }
  );


  editUser$ = createEffect(
    () => this.actions$.pipe(
        ofType(AuthActionsTypes.EDIT_USER),
        exhaustMap(
            (action: EditUserAction) => this.loginService.editUser(action.payload.user).pipe(
                map((user: IUser) => {
                  return {type: AuthActionsTypes.EDIT_USER_SUCCESS, payload: {user: user}}
                }),
                catchError(() => of({ type: AuthActionsTypes.EDIT_USER_FAILURE }))
            )
        )
    ),
    { useEffectsErrorHandler: false }
  );

 
  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}