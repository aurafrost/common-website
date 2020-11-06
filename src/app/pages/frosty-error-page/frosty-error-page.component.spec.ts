import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyErrorPageComponent } from './frosty-error-page.component';

describe('FrostyErrorPageComponent', () => {
  let component: FrostyErrorPageComponent;
  let fixture: ComponentFixture<FrostyErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyErrorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
