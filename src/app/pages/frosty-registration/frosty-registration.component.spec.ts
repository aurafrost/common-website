import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyRegistrationComponent } from './frosty-registration.component';

describe('FrostyRegistrationComponent', () => {
  let component: FrostyRegistrationComponent;
  let fixture: ComponentFixture<FrostyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
