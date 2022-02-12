import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailGridComponent } from './change-email-grid.component';

describe('ChangeEmailGridComponent', () => {
  let component: ChangeEmailGridComponent;
  let fixture: ComponentFixture<ChangeEmailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEmailGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
