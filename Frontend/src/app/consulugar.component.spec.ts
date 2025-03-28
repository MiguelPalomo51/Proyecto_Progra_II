import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulugarComponent } from './consulugar.component';

describe('ConsulugarComponent', () => {
  let component: ConsulugarComponent;
  let fixture: ComponentFixture<ConsulugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});