import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineZoneComponent } from './online-zone.component';

describe('OnlineZoneComponent', () => {
  let component: OnlineZoneComponent;
  let fixture: ComponentFixture<OnlineZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
