import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44365/api/auth/";

constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+ "login" ,loginModel)
  }


  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
