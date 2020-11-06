import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyAxHandlerComponent } from './frosty-ax-handler.component';

describe('FrostyAxHandlerComponent', () => {
  let component: FrostyAxHandlerComponent;
  let fixture: ComponentFixture<FrostyAxHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyAxHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyAxHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
