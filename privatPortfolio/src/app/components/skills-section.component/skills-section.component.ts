import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  imports: [TranslatePipe],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
    private translate = inject(TranslateService);

    useLanguage(language: string):void {
    this.translate.use(language);
  }
}
