import { Action, createAction, props } from '@ngrx/store';
import { IUser } from 'src/models';

export enum AuthActionsTypes {
    LOGIN =                 '[LOGIN INDEX] Login',
    LOGIN_SUCCES =          '[LOGIN INDEX] Login Success',
    LOGIN_FAILURE =         '[LOGIN INDEX] Login Failure',
    ADD_USER =              '[LOGIN INDEX] Add User', 
    ADD_USER_SUCCESS =      '[LOGIN INDEX] Add User Success', 
    ADD_USER_FAILURE =      '[LOGIN INDEX] Add User Failure',
    EDIT_USER =             '[LOGIN INDEX] Edit User', 
    EDIT_USER_SUCCESS =     '[LOGIN INDEX] Edit User Success', 
    EDIT_USER_FAILURE =     '[LOGIN INDEX] Edit User Failure', 
    LOGOUT =                '[LOGIN INDEX] Logout',
    CLEAR_ERROR =           '[LOGIN INDEX] Clear error',
}

////////////////////////////////////////////////////////////////////////////////
// LOGIN ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class LoginAction implements Action {
    readonly type = AuthActionsTypes.LOGIN;
    constructor(public payload: {username: string; password: string}) {}
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionsTypes.LOGIN_SUCCES;
    constructor(public payload: {user: IUser}) {}
}

export class LoginFailureAction implements Action {
    readonly type = AuthActionsTypes.LOGIN_FAILURE;
}

////////////////////////////////////////////////////////////////////////////////
// ADD USER ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class AddUserAction implements Action {
    readonly type = AuthActionsTypes.ADD_USER;
    constructor(public payload: { user: IUser}) {}
}

export class AddUserSuccessAction implements Action {
    readonly type = AuthActionsTypes.ADD_USER_SUCCESS;
    constructor(public payload: {user: IUser}) {}
}

export class AddUserFailureAction implements Action {
    readonly type = AuthActionsTypes.ADD_USER_FAILURE;
}

////////////////////////////////////////////////////////////////////////////////
// EDIT USER ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class EditUserAction implements Action {
    readonly type = AuthActionsTypes.EDIT_USER;
    constructor(public payload: {user: IUser}) {}
}

export class EditUserSuccessAction implements Action {
    readonly type = AuthActionsTypes.EDIT_USER_SUCCESS;
    constructor(public payload: {user: IUser}) {}
}

export class EditUserFailureAction implements Action {
    readonly type = AuthActionsTypes.EDIT_USER_FAILURE;
}

////////////////////////////////////////////////////////////////////////////////
// LOGOUT //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class LogoutAction implements Action {
    readonly type = AuthActionsTypes.LOGOUT;
}

////////////////////////////////////////////////////////////////////////////////
// CLEAR ERROR /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export class ClearErrorAction implements Action {
    readonly type = AuthActionsTypes.CLEAR_ERROR;
}

////////////////////////////////////////////////////////////////////////////////
// ACTION TYPES ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export type AuthActions = 
    LoginAction | LoginSuccessAction | LoginFailureAction | 
    AddUserAction | AddUserSuccessAction | AddUserFailureAction |
    EditUserAction | EditUserSuccessAction | EditUserFailureAction | 
    LogoutAction | ClearErrorAction;