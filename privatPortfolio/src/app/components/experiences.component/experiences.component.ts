import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

interface Experience {
  text: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements OnInit {

  // Einen Service (Objekt) von Angular in deine Component holen.
  // translate ist inject
  private translate = inject(TranslateService);

  currentIndex = 0;

  // Bilder bleiben im Code
  experiences: Experience[] = [
    { text: '', author: '', role: '', image: 'assets/person.jpg' },
    { text: '', author: '', role: '', image: 'assets/person2.jpg' },
    { text: '', author: '', role: '', image: 'assets/person3.jpg' },
  ];

  ngOnInit() {
    this.loadTranslations();

    // bei Sprachwechsel neu laden
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('experiences').subscribe((data: any[]) => {
      data.forEach((exp, i) => {
        this.experiences[i].text = exp.text;
        this.experiences[i].author = exp.author;
        this.experiences[i].role = exp.role;
      });
    });
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.experiences.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.experiences.length) %
      this.experiences.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}