import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionbComponent } from './sectionb.component';

describe('SectionbComponent', () => {
  let component: SectionbComponent;
  let fixture: ComponentFixture<SectionbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
