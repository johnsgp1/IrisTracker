import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router} from '@angular/router'
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
})
export class LoginComponent{
  constructor(private router: Router) { }
  username = new FormControl('', [Validators.required]);
    password=new FormControl('',[Validators.required])
    firstName=new FormControl('',[Validators.required])
      ngOnInit() { } 
      onClickSubmit(form:NgForm){
          alert(form.value.username+''+form.value.password);
          this.router.navigate(['/Home']);
      }
      getusernameErrorMessage(){
        return this.username.hasError('required') ? 'You must enter a username' :
        ''
      }
      getpasswordErrorMessage(){
        return this.password.hasError('required') ? 'You must enter a password' :
        ''
      }
}