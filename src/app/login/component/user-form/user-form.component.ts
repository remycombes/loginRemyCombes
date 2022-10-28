import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  ////////////////////////////////////////////////////////////////////////////////
  // INPUT / OUTPUTS /////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  @Input() user: IUser;
  @Input() mode: string;
  @Output() submitForm = new EventEmitter<IUser>();

  ////////////////////////////////////////////////////////////////////////////////
  // FORM ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  userForm: FormGroup = this.fb.group({
    login: ['', Validators.required], 
    password: ['', Validators.required], 
    name: ['', Validators.required], 
    email: ['', Validators.required], 
    locationX: ['', Validators.required], 
    locationY: ['', Validators.required]
  }); 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.user && this.mode==='edition'){
      this.userForm.patchValue({
        login:      this.user.login, 
        password:   this.user.password, 
        name:       this.user.name, 
        email:      this.user.email,  
        locationX:  this.user.location.x, 
        locationY:  this.user.location.y, 

      })
    }
  }

  submit(): void{
    let user: IUser = {
      login:      this.userForm.get('login').value, 
      password:   this.userForm.get('password').value, 
      email:      this.userForm.get('email').value, 
      name:       this.userForm.get('name').value, 
    }
    this.submitForm.emit(user); 

  }

}
