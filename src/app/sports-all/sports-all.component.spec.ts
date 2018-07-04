import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsAllComponent } from './sports-all.component';

describe('SportsAllComponent', () => {
  let component: SportsAllComponent;
  let fixture: ComponentFixture<SportsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
