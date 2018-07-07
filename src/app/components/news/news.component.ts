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

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	news: Array<INewsArticle> = [
		{
			articleUuid: '9d511666-6879-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 4 2016'),
			articleTitle: 'Test Title',
			// tslint:disable-next-line:max-line-length
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			articleUuid: '9d511656-6879-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 9 2016'),
			articleTitle: 'Test Title #2',
			// tslint:disable-next-line:max-line-length
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			articleUuid: '9d511666-6899-11e8-adc0-fa7ae01bbebc',
			articleDate: new Date('Janaury 15 2016'),
			articleTitle: 'Test Title #3',
			// tslint:disable-next-line:max-line-length
			articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	];

	constructor() { }

	ngOnInit() {	}

}
