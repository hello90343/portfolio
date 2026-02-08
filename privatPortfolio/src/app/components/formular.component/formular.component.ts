import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-formular',
  imports: [TranslatePipe],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss',
})
export class FormularComponent {
    private translate = inject(TranslateService);

    useLanguage(language: string):void {
    this.translate.use(language);
  }
}
