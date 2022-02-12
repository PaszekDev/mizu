import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferencesGridComponent } from './user-preferences-grid.component';

describe('UserPreferencesGridComponent', () => {
  let component: UserPreferencesGridComponent;
  let fixture: ComponentFixture<UserPreferencesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPreferencesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferencesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
