import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnellayoutComponent } from './funnellayout.component';

describe('FunnellayoutComponent', () => {
  let component: FunnellayoutComponent;
  let fixture: ComponentFixture<FunnellayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnellayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnellayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
