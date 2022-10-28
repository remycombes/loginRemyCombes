import { Component }    from '@angular/core';
import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs';
import { IUser }        from 'src/models';
import { LogoutAction } from './store/auth/auth.actions';
import { AppState }     from './store/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:              string                = 'login app';
  user$:              Observable<IUser>; 
  loginLoading$:      Observable<boolean>; 
  editUserLoading$:   Observable<boolean>; 

  ////////////////////////////////////////////////////////////////////////////////
  // LIFECYCLE ///////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  constructor(private readonly store: Store<AppState>) { 
    this.user$ = this.store.select((store) => store.auth.user); 
  }

  public disconnect(): void{
    this.store.dispatch(new LogoutAction()); 

  }
}
