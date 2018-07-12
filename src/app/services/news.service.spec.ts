import { TestBed, inject } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NewsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NewsService,
				HttpClient,
				HttpHandler
			]
		});
	});

	it('should be created', inject([NewsService], (service: NewsService) => {
		expect(service).toBeTruthy();
	}));

	it('should get news items', inject([NewsService], (service: NewsService) => {
		spyOn(service, 'getNews');

		service.getNews();

		expect(service.getNews).toHaveBeenCalled();
	}));
});
