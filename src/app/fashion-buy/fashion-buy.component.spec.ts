import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBuyComponent } from './fashion-buy.component';

describe('FashionBuyComponent', () => {
  let component: FashionBuyComponent;
  let fixture: ComponentFixture<FashionBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
