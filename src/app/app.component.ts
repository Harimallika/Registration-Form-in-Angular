import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationform';

  regForm:FormGroup;
  submited=false;

  constructor ( private fb:FormBuilder) { 
    this.regForm = this.fb.group({
      firstName:[ '', [Validators.required]],
      lastName:[ '', [Validators.required]],
      email:[ '', [Validators.required, Validators.email]],
      password:[ '', [Validators.required, Validators.minLength(8)]],
      confirmpassword:[ '', [Validators.required]],
    },{
      Validators:this.passwordMatchValidation.bind(this)
    }
    );
  }
  passwordMatchValidation(form: FormGroup) {
    const password = form.get('password')!;
    const cpassword = form.get('confirmpassword')!;
    if(password.value !== cpassword.value){
      return{
        mismatch:true
      };
    }else{
      return null;
    }
    }
    

  
  
  

  submit(){
    console.log(this.regForm.value);
    this.submited=true  
  }
  reset(){
    this.submited = false;
    this.regForm.reset()
  }
}
