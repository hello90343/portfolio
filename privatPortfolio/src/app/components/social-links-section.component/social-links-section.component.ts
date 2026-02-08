import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-social-links-section',
  imports: [TranslatePipe],
  templateUrl: './social-links-section.component.html',
  styleUrl: './social-links-section.component.scss',
})
export class SocialLinksSectionComponent {
    private translate = inject(TranslateService);
    
    useLanguage(language: string):void {
    this.translate.use(language);
  }
}
