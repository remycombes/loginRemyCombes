import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { login } from 'src/app/store/auth/auth.actions';
import { selectUser } from 'src/app/store/auth/auth.reducer';
import { IUser } from 'src/models';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  user$: Observable<any> = this.store.pipe(map(state=>selectUser(state)));

  constructor(private readonly store: Store<{ login: any }>) { }

  user: IUser = null; 

  ngOnInit(): void {
  }

  public login(username: string, password: string){
    this.store.dispatch(login({ username: username, password: password }));
  }

}
