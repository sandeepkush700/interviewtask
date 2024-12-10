import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TommorowComponent } from './tommorow.component';

describe('TommorowComponent', () => {
  let component: TommorowComponent;
  let fixture: ComponentFixture<TommorowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TommorowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TommorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
