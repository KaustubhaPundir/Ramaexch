import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkmodesignal=signal<string>('null');
  updateDarkMode(){
    this.darkmodesignal.update((value) =>(value==="dark"?"null":"dark"));
  }
  constructor() { }
}
