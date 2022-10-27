import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/models';
import { login} from './user.actions';

export interface UserState{
    login: string; 
}

export const initialState : UserState = {
    login: ''
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, {username, password}) => ({...state, login:username})),
//   on(logout, (state) => state - 1),
//   on(signIn, (state) => 0), 
//   on(editAccount, (state) => 0)
);