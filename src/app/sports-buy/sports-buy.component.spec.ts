import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBuyComponent } from './sports-buy.component';

describe('SportsBuyComponent', () => {
  let component: SportsBuyComponent;
  let fixture: ComponentFixture<SportsBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
