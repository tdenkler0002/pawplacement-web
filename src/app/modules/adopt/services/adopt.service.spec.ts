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
	let service: AdoptService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AdoptService,
				HttpClient,
				HttpHandler
			]
		});
	});

	beforeEach(inject([AdoptService], s => {
		service = s;
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
