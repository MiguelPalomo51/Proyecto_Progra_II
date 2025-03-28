import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsuresevaComponent } from './consureservas.component';

describe('ConsuresevaComponent', () => {
  let component: ConsuresevaComponent;
  let fixture: ComponentFixture<ConsuresevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsuresevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsuresevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});