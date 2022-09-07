import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FormValidate: any = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f(): any {
    return this.FormValidate.controls;
  }

  onSubmit() {
    if (!this.FormValidate.invalid) {
      let acc: any = [];
      acc.push(this.FormValidate.value);
      let data: any = JSON.stringify(acc);
      localStorage.setItem('acc', data);
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Done! o(*￣▽￣*)o',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        this.router.navigate(['user/login'])
      }, 1000);
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    var pwd: any = document.getElementById("pwd");
    var eye = document.getElementById("eye");

    eye?.addEventListener("click", togglePass);

    function togglePass() {
      eye?.classList.toggle("active");
      pwd.type == "password" ? (pwd.type = "text") :
        (pwd.type = "password");


    }

    var pwd2: any = document.getElementById("pwd2");
    var eye2 = document.getElementById("eye2");

    eye2?.addEventListener("click", togglePass2);

    function togglePass2() {
      eye2?.classList.toggle("active");
      pwd2.type == "password" ? (pwd2.type = "text") :
        (pwd2.type = "password");


    }
  }




}


