import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordGridComponent } from './change-password-grid.component';

describe('ChangePasswordGridComponent', () => {
  let component: ChangePasswordGridComponent;
  let fixture: ComponentFixture<ChangePasswordGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
