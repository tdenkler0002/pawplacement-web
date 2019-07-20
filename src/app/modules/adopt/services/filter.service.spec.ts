/*****************************
*  Package Imports
******************************/

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/

import { FilterService } from './filter.service';

/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/

describe('FilterService', () => {
	let service: FilterService;

	beforeEach(() => TestBed.configureTestingModule({
		providers: [
			HttpClient,
			HttpHandler
		]
	}));

	beforeEach(inject([FilterService], s => {
		service = s;
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
