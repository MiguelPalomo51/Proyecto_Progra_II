import { ComponentFixture, TestBed } from '@angular/core/testing';

import { guardarexamenComponent } from './guardarexamen.component';

describe('guardarexamenComponent', () => {
  let component: guardarexamenComponent;
  let fixture: ComponentFixture<guardarexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ guardarexamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(guardarexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});