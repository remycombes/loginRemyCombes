import { Component, OnDestroy, OnInit }   from '@angular/core';
import { Store }                          from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppState }                       from 'src/app/store/state.model';
import { IUser }                          from 'src/models';
import { ClearErrorAction, EditUserAction, LoginAction, LogoutAction, AddUserAction }        from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit, OnDestroy {
  ////////////////////////////////////////////////////////////////////////////////
  // PROPERTIES //////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  user$:          Observable<IUser>;
  loginLoading$:  Observable<boolean>; 
  editLoading$:   Observable<boolean>;
  creationLoading$:   Observable<boolean>;
  errorMessage$:  Observable<string>;
  editMode:       boolean = false; 

  // Manuals subscriptions ///////////////////////////////////////////////////////
  user:             IUser;
  loginLoading:     boolean; 
  editLoading:      boolean; 
  creationLoading:  boolean; 
  errorMessage:     string; 

  // Ubsubscription //////////////////////////////////////////////////////////////
  unsubscription$: Subject<any> = new Subject();

  ////////////////////////////////////////////////////////////////////////////////
  // LIFECYCLE ///////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    // SELECTIONS ///////////////////////////////////////////////////////////////
    this.user$              = this.store.select((store) => store.auth.user); 
    this.loginLoading$      = this.store.select((store) => store.auth.isLoadingLogin); 
    this.editLoading$       = this.store.select((store) => store.auth.isLoadingEdit); 
    this.creationLoading$   = this.store.select((store) => store.auth.isLoadingCreation); 
    this.errorMessage$      = this.store.select((store) => store.auth.errorMessage); 

    // MANUAL SUBSCRIPTIONS /////////////////////////////////////////////////////
    this.user$.pipe(takeUntil(this.unsubscription$)).subscribe(
      (user: IUser)=>{this.user = user;}
    ); 
    this.loginLoading$.pipe(takeUntil(this.unsubscription$)).subscribe(
      (isLoading: boolean)=>{this.loginLoading = isLoading;}
    ); 
    this.creationLoading$.pipe(takeUntil(this.unsubscription$)).subscribe(
      (isLoading: boolean)=>{this.creationLoading = isLoading;}
    ); 

    this.editLoading$.pipe(takeUntil(this.unsubscription$)).subscribe(
      (isLoading: boolean)=>{this.editLoading = isLoading;}
    ); 
    this.errorMessage$.pipe(takeUntil(this.unsubscription$)).subscribe(
      (error: string)=>{this.errorMessage = error;}
    ); 
  }

  ngOnDestroy(): void {
    // UNSUBSCRIPTION ///////////////////////////////////////////////////////////
    this.unsubscription$.next(true); 
  }

  ////////////////////////////////////////////////////////////////////////////////
  // LOG METHODS /////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  public login(username: string, password: string): void{
    this.store.dispatch(new LoginAction({ username: username, password: password }));
  }

  public createUser(user: IUser){
    this.store.dispatch(new AddUserAction({ user: user}));
  }

  public editUser(user: IUser){
    this.store.dispatch(new EditUserAction({ user: user}));
  }

  public logOut(): void{
    this.store.dispatch(new ClearErrorAction());
    this.store.dispatch(new LogoutAction());
    this.setEditMode(false);
  }

  public setEditMode(value: boolean){
    this.editMode = value; 
  }

}
