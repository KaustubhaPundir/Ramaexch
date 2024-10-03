import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { DarkmodeService } from '../darkmode.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tennis',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './tennis.component.html',
  styleUrl: './tennis.component.css'
})
export class TennisComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
  public name:any;
  public own:any;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.fetchDetails();
    this.fetchDetails1();
  }
  public fetchDetails(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp:any) => {
        console.log(resp);
        this.name=resp;
      }
    )
  }
  public fetchDetails1(){
    this.http.get("http://localhost:3000/Tennis").subscribe(
      (resp:any) => {
        console.log(resp);
        this.own=resp;
      }
    )
  }
}
