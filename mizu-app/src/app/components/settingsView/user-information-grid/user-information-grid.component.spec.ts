import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationGridComponent } from './user-information-grid.component';

describe('UserInformationGridComponent', () => {
  let component: UserInformationGridComponent;
  let fixture: ComponentFixture<UserInformationGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
