import { Action, createAction, props } from '@ngrx/store';
import { IUser } from 'src/models';

export enum AuthActionsTYpes {
    Login =             '[LOGIN INDEX] Login',
    LoginSuccess =      '[LOGIN INDEX] Login Success',
    LoginFailure =      '[LOGIN INDEX] Login Failure',
    EditUser =          '[LOGIN INDEX] Edit User', 
    EditUserSuccess =   '[LOGIN INDEX] Edit User Success', 
    EditUserFailure =   '[LOGIN INDEX] Edit User Failure', 
    Logout =            '[LOGIN INDEX] Logout',
}

////////////////////////////////////////////////////////////////////////////////
// LOGIN ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class LoginAction implements Action {
    readonly type = AuthActionsTYpes.Login;
    constructor(public payload: {username: string; password: string}) {}
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionsTYpes.LoginSuccess;
    constructor(public payload: {user: IUser}) {}
}

export class LoginFailureAction implements Action {
    readonly type = AuthActionsTYpes.LoginFailure;
}

////////////////////////////////////////////////////////////////////////////////
// EDIT USER ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class EditUserAction implements Action {
    readonly type = AuthActionsTYpes.EditUser;
    constructor(public payload: {user: IUser, username: string; password: string, email: string, location: string}) {}
}

export class EditUserSuccessAction implements Action {
    readonly type = AuthActionsTYpes.EditUserSuccess;
    constructor(public payload: {user: IUser}) {}
}

export class EditUserFailureAction implements Action {
    readonly type = AuthActionsTYpes.EditUserFailure;
}

////////////////////////////////////////////////////////////////////////////////
// LOGOUT //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class LogoutAction implements Action {
    readonly type = AuthActionsTYpes.Logout;
}

////////////////////////////////////////////////////////////////////////////////
// ACTION TYPES ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export type AuthActions = LoginAction | LoginSuccessAction | LoginFailureAction | EditUserAction | EditUserSuccessAction | EditUserFailureAction | LogoutAction;