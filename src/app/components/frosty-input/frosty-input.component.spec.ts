import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyInputComponent } from './frosty-input.component';

describe('FrostyInputComponent', () => {
  let component: FrostyInputComponent;
  let fixture: ComponentFixture<FrostyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
