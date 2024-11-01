import { Component, inject } from '@angular/core';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { DarkmodeService } from '../darkmode.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-tennis',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './tennis.component.html',
  styleUrl: './tennis.component.css'
})
export class TennisComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);
  login: LoginService = inject(LoginService);
  user=this.login.getuser();
  // users=this.user.toString();
  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
  public name:any;
  public own:any;
  
  constructor(private http: HttpClient,private router:Router){
  }
  ngOnInit(): void {
    // this.fetchDetails();
    this.fetchDetails1();
  }
  // public fetchDetails(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (resp:any) => {
  //       console.log(resp);
  //       this.name=resp;
  //     }
  //   )
  // }
  public fetchDetails1(){
    this.http.get("http://localhost:3000/user/"+this.user).subscribe(
      (resp:any) => {
        console.log(resp);
        this.own=resp;
      }
    )
  }
  public logout(){
    this.user=null;
    this.login.resetuser();
    this.router.navigateByUrl("landing");
  }
}

