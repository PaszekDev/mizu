import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowEditComponent } from './table-row-edit.component';

describe('TableRowEditComponent', () => {
  let component: TableRowEditComponent;
  let fixture: ComponentFixture<TableRowEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
