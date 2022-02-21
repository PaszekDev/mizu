import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableRowDialogComponent } from './edit-table-row-dialog-component';

describe('EditTableRowDialogComponent', () => {
  let component: EditTableRowDialogComponent;
  let fixture: ComponentFixture<EditTableRowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTableRowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableRowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
