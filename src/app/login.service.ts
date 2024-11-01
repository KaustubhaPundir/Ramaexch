import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  updateuserindex(i:any){
    localStorage.setItem('user',i);
    // console.log(user);
  }
  getuser(){
    return localStorage.getItem('user');
  }
  resetuser(){
    localStorage.clear();
  }
  constructor() { }
}
