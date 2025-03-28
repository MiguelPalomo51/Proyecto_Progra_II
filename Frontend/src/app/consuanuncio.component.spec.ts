import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsuanuncioComponent } from './consuanuncio.component';

describe('ConsuanuncioComponent', () => {
  let component: ConsuanuncioComponent;
  let fixture: ComponentFixture<ConsuanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsuanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsuanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});