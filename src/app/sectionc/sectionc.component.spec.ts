import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncComponent } from './sectionc.component';

describe('SectioncComponent', () => {
  let component: SectioncComponent;
  let fixture: ComponentFixture<SectioncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectioncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
