import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTvOnTheAirComponent } from './get-tv-on-the-air.component';

describe('GetTvOnTheAirComponent', () => {
  let component: GetTvOnTheAirComponent;
  let fixture: ComponentFixture<GetTvOnTheAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTvOnTheAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTvOnTheAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
