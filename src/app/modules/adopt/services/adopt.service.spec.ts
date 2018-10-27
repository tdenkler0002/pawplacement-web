/*****************************
 *  Package Imports
******************************/

import { TestBed, inject } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';


/*****************************
 *  Services
******************************/

import { AdoptService } from './adopt.service';

describe('AdoptService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AdoptService,
				HttpClient,
				HttpHandler
			]
		});
	});

	it('should be created', inject([AdoptService], (service: AdoptService) => {
		expect(service).toBeTruthy();
	}));
});
