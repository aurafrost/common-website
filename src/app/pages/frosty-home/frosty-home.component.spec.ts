import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyHomeComponent } from './frosty-home.component';

describe('FrostyHomeComponent', () => {
  let component: FrostyHomeComponent;
  let fixture: ComponentFixture<FrostyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
