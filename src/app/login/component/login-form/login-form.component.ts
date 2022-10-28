import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/models';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() user: IUser;
  @Output() submitLogin = new EventEmitter<IUser>();

  public map!: Map

  loginForm: FormGroup = this.fb.group({
    login: ['', Validators.required], 
    password: ['', Validators.required]
  }); 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public submit(){
    let user: IUser = {
      login: this.loginForm.get('login').value, 
      password: this.loginForm.get('password').value, 
    }
    this.submitLogin.emit(user); 
  }

}
