import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports:[TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
currentLang: 'DE' | 'EN' = 'EN';

translatorSwitch(lang: 'DE' | 'EN') {
  this.currentLang = lang;
 }
  private translate = inject(TranslateService);

  useLanguage(language: string):void {
    this.translate.use(language);
  }
}