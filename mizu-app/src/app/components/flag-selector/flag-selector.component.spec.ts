import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSelectorComponent } from './flag-selector.component';

describe('FlagSelectorComponent', () => {
  let component: FlagSelectorComponent;
  let fixture: ComponentFixture<FlagSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
