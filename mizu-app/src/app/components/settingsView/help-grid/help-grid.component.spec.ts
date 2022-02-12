import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpGridComponent } from './help-grid.component';

describe('HelpGridComponent', () => {
  let component: HelpGridComponent;
  let fixture: ComponentFixture<HelpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
