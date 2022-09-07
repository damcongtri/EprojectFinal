import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  FormValidate: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  get f(): any {
    return this.FormValidate.controls;
  }

  onSubmit() {
    if (!this.FormValidate.invalid) {
      let acc:any = [];
      acc= JSON.parse(localStorage.getItem('acc') as string );
      console.log(acc);
      let data :any;
      if(acc){
      data = acc.find((item:any)=>{
        return item.email == this.FormValidate.value.email && item.password == this.FormValidate.value.password;
        
      });
      console.log(data)
      if(data)  {
        alert("thanh cong") 
         this.router.navigate([''])} else{  alert('chua co tai khoan dang nhap')}
      }
     
    }
  }

  ngOnInit(): void {
    var pwd: any = document.getElementById("pwd");
    var eye = document.getElementById("eye");

    eye?.addEventListener("click", togglePass);

    function togglePass() {
      eye?.classList.toggle("active");
      pwd.type == "password" ? (pwd.type = "text") :
        (pwd.type = "password");
    }

  }




}
