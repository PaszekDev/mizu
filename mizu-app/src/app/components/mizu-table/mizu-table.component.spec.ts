import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MizuTableComponent } from './mizu-table.component';

describe('MizuTableComponent', () => {
  let component: MizuTableComponent;
  let fixture: ComponentFixture<MizuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MizuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MizuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
