import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTableRowDialogComponent } from './delete-table-row-dialog.component';

describe('DeleteTableRowDialogComponent', () => {
  let component: DeleteTableRowDialogComponent;
  let fixture: ComponentFixture<DeleteTableRowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTableRowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTableRowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
