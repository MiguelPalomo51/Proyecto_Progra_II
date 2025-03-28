import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutipoanuncioComponent } from './consutipoanuncio.component';

describe('ConsutipoanuncioComponent', () => {
  let component: ConsutipoanuncioComponent;
  let fixture: ComponentFixture<ConsutipoanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsutipoanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsutipoanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});