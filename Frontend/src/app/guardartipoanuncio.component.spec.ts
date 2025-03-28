import { ComponentFixture, TestBed } from '@angular/core/testing';

import { guardartipoanuncioComponent } from './guardartipoanuncio.component';

describe('guardartipoanuncioComponent', () => {
  let component: guardartipoanuncioComponent;
  let fixture: ComponentFixture<guardartipoanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ guardartipoanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(guardartipoanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});