import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component/header.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { SocialLinksSectionComponent } from './components/social-links-section.component/social-links-section.component';
import { AboutSectionComponent } from './components/about-section.component/about-section.component';
import { SkillsSectionComponent } from './components/skills-section.component/skills-section.component';
import { ProjectsComponent } from './components/projects.component/projects.component';
import { ExperiencesComponent } from './components/experiences.component/experiences.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, SocialLinksSectionComponent, AboutSectionComponent, SkillsSectionComponent, ProjectsComponent, ExperiencesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('privatPortfolio');
}
