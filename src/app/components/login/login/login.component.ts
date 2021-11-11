import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,    
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password:new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
      
    })
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    let loginModel = Object.assign({},this.loginForm.value);
    this.authService.login(loginModel).subscribe(response => {
      console.log(response)
      localStorage.setItem("token",response.data.token)
      this.router.navigate(['home']);
    },responseError=>{
      console.log(responseError)
    })

  }

}
