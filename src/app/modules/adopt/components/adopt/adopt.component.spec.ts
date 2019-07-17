/*****************************
 *  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

/*****************************
 *  Components
******************************/

import { AdoptComponent } from './adopt.component';
import { AdoptFilterComponent } from '../adopt-filter/adopt-filter.component';
import { AdoptGridComponent } from '../adopt-grid/adopt-grid.component';
import { AdoptDropdownComponent } from '../adopt-filter/adopt-dropdown/adopt-dropdown.component';

describe('AdoptComponent', () => {
	let component: AdoptComponent;
	let fixture: ComponentFixture<AdoptComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AdoptComponent,
				AdoptFilterComponent,
				AdoptGridComponent,
				AdoptDropdownComponent
			],
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				NgSelectModule
			],
			providers: [
				HttpClient,
				HttpHandler
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
