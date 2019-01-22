import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFilterComponent } from './adopt-filter.component';

describe('AdoptFilterComponent', () => {
  let component: AdoptFilterComponent;
  let fixture: ComponentFixture<AdoptFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
