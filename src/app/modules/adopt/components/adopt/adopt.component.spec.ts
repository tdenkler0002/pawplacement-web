/*****************************
 *  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

/*****************************
 *  Components
******************************/

import { AdoptComponent } from './adopt.component';

describe('AdoptComponent', () => {
	let component: AdoptComponent;
	let fixture: ComponentFixture<AdoptComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AdoptComponent],
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
