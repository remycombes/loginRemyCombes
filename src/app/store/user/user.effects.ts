import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
    login, 
    loginSuccess, 
    loginFailure
} from './user.actions'; 

import { LoginService } from '../../data/service/login/login.service';
 
@Injectable()
export class LoginEffects {
  login$ = createEffect(
    () => this.actions$.pipe(
        ofType(login),
        exhaustMap(
            action => this.loginService.login(action.username, action.password).pipe(
                map(user => loginSuccess({ user })),
                catchError(error => of(loginFailure()))
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