import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecAllComponent } from './elec-all.component';

describe('ElecAllComponent', () => {
  let component: ElecAllComponent;
  let fixture: ComponentFixture<ElecAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
