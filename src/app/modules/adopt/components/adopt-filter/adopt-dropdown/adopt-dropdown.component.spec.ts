import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptDropdownComponent } from './adopt-dropdown.component';

describe('AdoptDropdownComponent', () => {
  let component: AdoptDropdownComponent;
  let fixture: ComponentFixture<AdoptDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
