import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }

}
