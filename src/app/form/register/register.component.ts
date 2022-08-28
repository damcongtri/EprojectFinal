import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var pwd:any = document.getElementById("pwd");
    var eye = document.getElementById("eye");

    eye?.addEventListener("click", togglePass);

    function togglePass(){
      eye?.classList.toggle("active");
      pwd.type ==  "password" ? (pwd.type = "text") :
      (pwd.type = "password");


    }

    var pwd2:any = document.getElementById("pwd2");
    var eye2 = document.getElementById("eye2");

    eye2?.addEventListener("click", togglePass2);

    function togglePass2(){
      eye2?.classList.toggle("active");
      pwd2.type ==  "password" ? (pwd2.type = "text") :
      (pwd2.type = "password");


    }
  }

  
  
  }


