import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      let acc: any = [];
      acc = JSON.parse(localStorage.getItem('acc') as string);
      console.log(acc);
      let data: any;
      if (acc) {
        data = acc.find((item: any) => {
          return item.email == this.FormValidate.value.email && item.password == this.FormValidate.value.password;

        });
        console.log(data)
        if (data) {
          localStorage.setItem('user', JSON.stringify(data.email))
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Successful!! ㄟ( ▔, ▔ )ㄏ ',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.router.navigate([''])
          }, 1000);

        } else {
          Swal.fire({
            icon: 'error',
            title: '[=_=]',
            text: 'Wrong login information!!',
          })
        }
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
