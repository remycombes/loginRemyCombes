import { IUser } from 'src/models';
import { AuthActions, AuthActionsTypes, LoginAction } from './auth.actions';



////////////////////////////////////////////////////////////////////////////////
// AUTH STATE //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export interface AuthState {
  user: IUser; 
  isLoadingLogin: boolean;
  isLoadingEdit: boolean; 
  isLoadingCreation: boolean; 
  errorMessage: string; 
}

export const initialState : AuthState = {
  user: null, 
  isLoadingLogin: false, 
  isLoadingEdit: false, 
  isLoadingCreation: false, 
  errorMessage: ''
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
      return {...state, user: null, isLoadingLogin: true};
    case AuthActionsTypes.LOGIN_SUCCES:
      return {...state, user: action.payload.user, isLoadingLogin: false};
    case AuthActionsTypes.LOGIN_FAILURE:
      return {...state, user: null, isLoadingLogin: false, errorMessage: 'Login failed'};

    // ADD USER ACTIONS ////////////////////////////////////////////////////
    case AuthActionsTypes.ADD_USER:
      return {...state, isLoadingCreation: true};
    case AuthActionsTypes.ADD_USER_SUCCESS:
        return {...state, user: action.payload.user, isLoadingCreation: false};
    case AuthActionsTypes.ADD_USER_FAILURE:
        return {...state, isLoadingCreation: false, errorMessage: 'User creation failed'};

    // EDIT USER ACTIONS ////////////////////////////////////////////////////
    case AuthActionsTypes.EDIT_USER:
      return {...state, isLoadingEdit: true};
    case AuthActionsTypes.EDIT_USER_SUCCESS:
        return {...state, user: action.payload.user, isLoadingEdit: false};
    case AuthActionsTypes.EDIT_USER_FAILURE:
        return {...state, isLoadingEdit: false, errorMessage: 'User edit failed'};

    // LOGOUT ACTIONS //////////////////////////////////////////////////////
    case AuthActionsTypes.CLEAR_ERROR:
        return {...state, errorMessage: ''};

    // LOGOUT ACTIONS //////////////////////////////////////////////////////
    case AuthActionsTypes.LOGOUT:
        return {...state, user: null};

    // DEFAULT ACTION //////////////////////////////////////////////////////
    default:
      return state;
  }
}
