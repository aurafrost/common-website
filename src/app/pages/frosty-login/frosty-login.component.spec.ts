import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyLoginComponent } from './frosty-login.component';

describe('FrostyLoginComponent', () => {
  let component: FrostyLoginComponent;
  let fixture: ComponentFixture<FrostyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
