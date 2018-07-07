/*****************************
 *  Package imports
******************************/

import { Component, OnInit } from '@angular/core';

/*****************************
 *  Components
******************************/

import { NewsItemComponent } from '../index';

/*****************************
 *  Interfaces/Pipes/Class imports
******************************/

import { INewsArticle } from '../../interfaces/index';

/*****************************
 *  Third-Party
******************************/

import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	sliderOptions = {
		items: 5,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 3000,
		dots: true,
		responsive: {
			0: {
				items: 3,
				navigation: false
			},
			900: {
				items: 5
			}
		}
	};

	// TODO: Temp data
	news: Array<INewsArticle> = [
		{
			articleUuid: '9d511666-6879-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 4 2016'),
			articleTitle: 'Test Title',
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			articleUuid: '9d511656-6879-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 9 2016'),
			articleTitle: 'Test Title #2',
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			articleUuid: '9d511666-6899-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 15 2016'),
			articleTitle: 'Test Title #3',
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	];

	constructor() { }

	ngOnInit() {	}

}
