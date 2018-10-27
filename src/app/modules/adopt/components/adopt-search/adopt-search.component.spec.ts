import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptSearchComponent } from './adopt-search.component';

describe('AdoptSearchComponent', () => {
	let component: AdoptSearchComponent;
	let fixture: ComponentFixture<AdoptSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AdoptSearchComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
