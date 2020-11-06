import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostyFooterComponent } from './frosty-footer.component';

describe('FrostyFooterComponent', () => {
  let component: FrostyFooterComponent;
  let fixture: ComponentFixture<FrostyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrostyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
