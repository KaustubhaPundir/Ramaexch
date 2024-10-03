import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-exch',
  standalone: true,
  imports: [HomeComponent,RouterLink,RouterModule],
  templateUrl: './exch.component.html',
  styleUrl: './exch.component.css'
})
export class ExchComponent {

}
