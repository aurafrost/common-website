import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyButtonComponent } from './frosty-button.component';

describe('FrostyButtonComponent', () => {
  let component: FrostyButtonComponent;
  let fixture: ComponentFixture<FrostyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
