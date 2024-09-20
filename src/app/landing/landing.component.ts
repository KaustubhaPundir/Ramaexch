import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
