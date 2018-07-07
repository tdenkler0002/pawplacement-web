/*****************************
 *  Package imports
******************************/

import { Component, OnInit, Input } from '@angular/core';
import { INewsArticle } from '../../../interfaces/index';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
	@Input() newsItem: INewsArticle;

	constructor() { }

	ngOnInit() {
	}

}
