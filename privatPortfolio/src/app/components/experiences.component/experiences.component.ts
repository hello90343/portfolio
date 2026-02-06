import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class ExperiencesComponent {
  currentIndex = 0;

  experiences: Experience[] = [
    {
      text:
        "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: 'V. Schuster',
      role: 'Team Partner',
      image: 'assets/person.jpg',
    },
    {
      text:
        "The collaboration was smooth and very efficient. Great communication and results.",
      author: 'Anna Weber',
      role: 'Project Lead',
      image: 'assets/person2.jpg',
    },
    {
      text:
        "Professional workflow and excellent teamwork throughout the project.",
      author: 'Daniel Koch',
      role: 'Developer',
      image: 'assets/person3.jpg',
    },
  ];

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