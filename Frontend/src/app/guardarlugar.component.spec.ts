import { ComponentFixture, TestBed } from '@angular/core/testing';

import { guardarlugarComponent } from './guardarlugar.component';

describe('guardarlugarComponent', () => {
  let component: guardarlugarComponent;
  let fixture: ComponentFixture<guardarlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ guardarlugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(guardarlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});