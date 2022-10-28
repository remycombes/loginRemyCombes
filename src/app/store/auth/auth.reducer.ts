import { createReducer, on } from '@ngrx/store';
import { FAKE_USERS } from 'src/app/data/service/login/FAKE-DATA';
import { IUser } from 'src/models';
import { AuthActions, AuthActionsTypes, LoginAction } from './auth.actions';

////////////////////////////////////////////////////////////////////////////////
// AUTH STATE //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
// REDUCER /////////////////////////////////////////////////////////////////////

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
) : AuthState {
  switch (action.type) {
    // LOGIN ACTIONS ////////////////////////////////////////////////////////
    case AuthActionsTypes.LOGIN:
      // return {...state, user: null, isLoadingLogin: true};
      return {...state, user: FAKE_USERS[0], isLoadingLogin: false};
    case AuthActionsTypes.LOGIN_SUCCES:
        return {...state, user: action.payload.user, isLoadingLogin: false};
    case AuthActionsTypes.LOGIN_FAILURE:
        return {...state, user: null, isLoadingLogin: false};

    // EDIT USER ACTIONS ////////////////////////////////////////////////////
    case AuthActionsTypes.EDIT_USER:
      return {...state, isLoadingEdit: true};
    case AuthActionsTypes.EDIT_USER_SUCCESS:
        return {...state, user: action.payload.user, isLoadingEdit: false};
    case AuthActionsTypes.EDIT_USER_FAILURE:
        return {...state, isLoadingEdit: false};

    // LOGOUT ACTIONS //////////////////////////////////////////////////////
    case AuthActionsTypes.LOGOUT:
        return {...state, user: null};

    // DEFAULT ACTION //////////////////////////////////////////////////////
    default:
      return state;
  }
}
