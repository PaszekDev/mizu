import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGridComponent } from './register-grid.component';

describe('RegisterGridComponent', () => {
  let component: RegisterGridComponent;
  let fixture: ComponentFixture<RegisterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
