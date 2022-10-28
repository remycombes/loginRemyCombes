import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/models';
import { AuthActions, AuthActionsTYpes } from './auth.actions';

export interface AuthState {
  user: IUser; 
  isLoadingLogin: boolean;
  isLoadingEdit: boolean; 
}

export const initialState : AuthState = {
  user: null, 
  isLoadingLogin: false, 
  isLoadingEdit: false
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
) {
  switch (action.type) {
    // LOGIN ACTIONS ////////////////////////////////////////////////////////
    case AuthActionsTYpes.Login:
      return {...state, user: null, isLoadingLogin: true};
    case AuthActionsTYpes.LoginSuccess:
        return {...state, user: action.payload.user, isLoadingLogin: false};
    case AuthActionsTYpes.LoginFailure:
        return {...state, user: null, isLoadingLogin: false};

    // EDIT USER ACTIONS ////////////////////////////////////////////////////
    case AuthActionsTYpes.EditUser:
      return {...state, isLoadingEdit: true};
    case AuthActionsTYpes.EditUserSuccess:
        return {...state, user: action.payload.user, isLoadingEdit: false};
    case AuthActionsTYpes.EditUserFailure:
        return {...state, isLoadingEdit: false};

    // LOGOUT ACTIONS //////////////////////////////////////////////////////
    case AuthActionsTYpes.Logout:
        return {...state, user: null};

    // DEFAULT ACTION //////////////////////////////////////////////////////
    default:
      return state;
  }
}

// export const userReducer = createReducer(
//   initialState,
//   on(login, (state, {username, password})   => ({...state, isLoading: false})), 
//   on(loginSuccess, (state, {user})          => ({...state, user: {login: user.login, name: user.name}, isLoading: false})), 
//   on(loginFailure, (state)                  => ({...state, user: null, isLoading: false}))
// );


// // Selectors
// export const selectUser         = (state: UserState) => state.user;
// export const selectUserLoading  = (state: UserState) => state.isLoading;