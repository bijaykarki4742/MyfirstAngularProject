import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionhComponent } from './sectionh.component';

describe('SectionhComponent', () => {
  let component: SectionhComponent;
  let fixture: ComponentFixture<SectionhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
