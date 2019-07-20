/*****************************
*  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/*****************************
*  Components
******************************/

import { AdoptDetailComponent } from './adopt-detail.component';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/


describe('AdoptDetailComponent', () => {
	let component: AdoptDetailComponent;
	let fixture: ComponentFixture<AdoptDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AdoptDetailComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
