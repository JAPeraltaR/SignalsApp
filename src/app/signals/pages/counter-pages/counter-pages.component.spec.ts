import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPagesComponent } from './counter-pages.component';

describe('CounterPagesComponent', () => {
  let component: CounterPagesComponent;
  let fixture: ComponentFixture<CounterPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
