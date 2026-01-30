import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: 'DE' | 'EN' = 'DE';

  translatorSwitch(lang: 'DE' | 'EN') {
    this.currentLang = lang;
  }
}

