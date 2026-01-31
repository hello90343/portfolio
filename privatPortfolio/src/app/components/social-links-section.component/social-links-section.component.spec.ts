import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksSectionComponent } from './social-links-section.component';

describe('SocialLinksSectionComponent', () => {
  let component: SocialLinksSectionComponent;
  let fixture: ComponentFixture<SocialLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
