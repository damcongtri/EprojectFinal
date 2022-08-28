import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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

  }

  
 

}
