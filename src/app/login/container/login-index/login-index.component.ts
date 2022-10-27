import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/data/service/login/login.service';
import { IUser } from 'src/models';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.scss']
})
export class LoginIndexComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  user: IUser = null; 

  ngOnInit(): void {
    this.loginService.login('john', 'doe').subscribe((user: IUser)=>{
      console.log(user); 
      this.user = user; 
    }); 
  }

}
