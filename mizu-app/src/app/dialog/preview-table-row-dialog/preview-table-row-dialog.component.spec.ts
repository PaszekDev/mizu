import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTableRowDialogComponent } from './preview-table-row-dialog.component';

describe('PreviewTableRowDialogComponent', () => {
  let component: PreviewTableRowDialogComponent;
  let fixture: ComponentFixture<PreviewTableRowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewTableRowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTableRowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
