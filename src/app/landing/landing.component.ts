import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  login: LoginService = inject(LoginService);
  email = "";
  pass = "";
  colorFlag = 'white';
  hidden='block';
  hidden2='none';
  constructor(private http: HttpClient,private router:Router) {
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
  public hideun(){
    this.hidden='none';
    this.hidden2='block';
  }
  public unhide(){
    this.hidden='block';
    this.hidden2='none';
  }
  public onsub(form: NgForm) {
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
              alert("login successfull");
              this.login.updateuserindex(resp[i].id);
              this.router.navigateByUrl("cricket");
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
  public onsub2(form2: NgForm) {
    this.email = form2.value.email;
    this.pass = form2.value.pass;
    const data={email:this.email,pass:this.pass};
    this.postData(data).subscribe((result: any)=>
    {
      console.log(result);
    }
    )
  }
  
}
