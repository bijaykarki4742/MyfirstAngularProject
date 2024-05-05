import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiongComponent } from './sectiong.component';

describe('SectiongComponent', () => {
  let component: SectiongComponent;
  let fixture: ComponentFixture<SectiongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectiongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectiongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
