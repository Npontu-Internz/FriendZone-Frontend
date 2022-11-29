import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingZoneComponent } from './following-zone.component';

describe('FollowingZoneComponent', () => {
  let component: FollowingZoneComponent;
  let fixture: ComponentFixture<FollowingZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
