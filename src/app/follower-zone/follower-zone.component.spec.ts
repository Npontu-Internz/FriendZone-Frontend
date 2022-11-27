import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerZoneComponent } from './follower-zone.component';

describe('FollowerZoneComponent', () => {
  let component: FollowerZoneComponent;
  let fixture: ComponentFixture<FollowerZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
