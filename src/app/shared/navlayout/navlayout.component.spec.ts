import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlayoutComponent } from './navlayout.component';

describe('NavlayoutComponent', () => {
  let component: NavlayoutComponent;
  let fixture: ComponentFixture<NavlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
