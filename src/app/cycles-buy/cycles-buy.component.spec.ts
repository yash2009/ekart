import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclesBuyComponent } from './cycles-buy.component';

describe('CyclesBuyComponent', () => {
  let component: CyclesBuyComponent;
  let fixture: ComponentFixture<CyclesBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclesBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclesBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
