import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
@Component({
  selector: 'app-inplay',
  standalone: true,
  imports: [],
  templateUrl: './inplay.component.html',
  styleUrl: './inplay.component.css'
})
export class InplayComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }

}
