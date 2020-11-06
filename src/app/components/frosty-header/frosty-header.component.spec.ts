import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyHeaderComponent } from './frosty-header.component';

describe('FrostyHeaderComponent', () => {
  let component: FrostyHeaderComponent;
  let fixture: ComponentFixture<FrostyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
