import { ComponentFixture, TestBed } from '@angular/core/testing';

import { guardaranuncioComponent } from './guardaranuncio.component';

describe('guardaranuncioComponent', () => {
  let component: guardaranuncioComponent;
  let fixture: ComponentFixture<guardaranuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ guardaranuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(guardaranuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});