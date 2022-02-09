import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeTableDialogComponent } from './customize-table-dialog.component';

describe('CustomizeTableDialogComponent', () => {
  let component: CustomizeTableDialogComponent;
  let fixture: ComponentFixture<CustomizeTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
