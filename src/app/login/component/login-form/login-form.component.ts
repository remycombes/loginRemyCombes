import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() user: IUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
