import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAllComponent } from './fashion-all.component';

describe('FashionAllComponent', () => {
  let component: FashionAllComponent;
  let fixture: ComponentFixture<FashionAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
