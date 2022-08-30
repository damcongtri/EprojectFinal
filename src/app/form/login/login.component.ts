import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  FormValidate:any = new FormGroup ({
    email:new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    ConfirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  get f():any{
    return this.FormValidate.controls;
  }

  onSubmit(){
    if(!this.FormValidate.invalid){

    }
  }
  
  ngOnInit(): void {
    var pwd:any = document.getElementById("pwd");
    var eye = document.getElementById("eye");

    eye?.addEventListener("click", togglePass);

    function togglePass(){
      eye?.classList.toggle("active");
      pwd.type ==  "password" ? (pwd.type = "text") :
      (pwd.type = "password");
    }

  }

  
 

}
