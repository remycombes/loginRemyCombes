import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
    readonly auth: AuthState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    auth: authReducer
};