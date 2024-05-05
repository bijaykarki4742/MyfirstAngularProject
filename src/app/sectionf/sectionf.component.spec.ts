import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionfComponent } from './sectionf.component';

describe('SectionfComponent', () => {
  let component: SectionfComponent;
  let fixture: ComponentFixture<SectionfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
