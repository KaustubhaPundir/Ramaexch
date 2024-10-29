import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  email = "";
  pass = "";
  colorFlag = 'white';
  constructor(private http: HttpClient) {
  }
  public postData(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/user", data);
  }
  public getData(data: any): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/user");
  }
  public change(){
    this.colorFlag='red';
  }
  onsub(form: NgForm) {
    this.email = form.value.email;
    this.pass = form.value.pass;
    // const data={email:this.email,pass:this.pass};
    // this.postData(data).subscribe((result: any)=>
    // {
    //   console.log(result);
    // }
    // )
    this.http.get("http://localhost:3000/user").subscribe(
      (resp: any) => {
        for (let i = 0; i < resp.length; i++) {
          if (this.email == resp[i].email) {
            if (this.pass == resp[i].pass) {
              console.log("login successfull");
            }
          }
          else {
            console.log("incorrect creds");
            this.change();
          }
        }
      }
    )
  }
  
}
