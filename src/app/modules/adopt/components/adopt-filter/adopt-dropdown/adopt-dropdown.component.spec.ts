/*****************************
*  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****************************
*  Components
******************************/

import { AdoptDropdownComponent } from './adopt-dropdown.component';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/


describe('AdoptDropdownComponent', () => {
	let component: AdoptDropdownComponent;
	let fixture: ComponentFixture<AdoptDropdownComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AdoptDropdownComponent
			],
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				NgSelectModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptDropdownComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
