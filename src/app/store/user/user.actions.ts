import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/models';

export const login = createAction(
    '[Login Index] Login',
    props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
    '[Login Index] Login Success',
    props<{ user: IUser }>()
);

export const loginFailure = createAction(
    '[Login Index] Login Failure'
);


// export const logout = createAction('[Login Index] Logout');
// export const signIn = createAction('[Login Index] SignIn');
// export const editAccount = createAction('[Login Index] Edit account');  