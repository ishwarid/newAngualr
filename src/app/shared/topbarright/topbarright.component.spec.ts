import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarrightComponent } from './topbarright.component';

describe('TopbarrightComponent', () => {
  let component: TopbarrightComponent;
  let fixture: ComponentFixture<TopbarrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
