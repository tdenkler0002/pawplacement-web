/*****************************
*  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****************************
*  Components
******************************/

import { AdoptFilterComponent } from './adopt-filter.component';
import { AdoptDropdownComponent } from './adopt-dropdown/adopt-dropdown.component';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/

import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('AdoptFilterComponent', () => {
	let component: AdoptFilterComponent;
	let fixture: ComponentFixture<AdoptFilterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AdoptFilterComponent,
				AdoptDropdownComponent
			],
			providers: [
				HttpClient,
				HttpHandler
			],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				NgSelectModule
			]
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
