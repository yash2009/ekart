import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclesAllComponent } from './cycles-all.component';

describe('CyclesAllComponent', () => {
  let component: CyclesAllComponent;
  let fixture: ComponentFixture<CyclesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
