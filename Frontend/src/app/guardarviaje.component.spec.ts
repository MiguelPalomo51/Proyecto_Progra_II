import { ComponentFixture, TestBed } from '@angular/core/testing';

import { guardarviajeComponent } from './guardarviaje.component';

describe('guardarviajeComponent', () => {
  let component: guardarviajeComponent;
  let fixture: ComponentFixture<guardarviajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ guardarviajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(guardarviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});