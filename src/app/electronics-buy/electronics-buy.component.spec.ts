import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsBuyComponent } from './electronics-buy.component';

describe('ElectronicsBuyComponent', () => {
  let component: ElectronicsBuyComponent;
  let fixture: ComponentFixture<ElectronicsBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
