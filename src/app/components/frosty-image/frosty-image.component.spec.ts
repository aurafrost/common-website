import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyImageComponent } from './frosty-image.component';

describe('FrostyImageComponent', () => {
  let component: FrostyImageComponent;
  let fixture: ComponentFixture<FrostyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
