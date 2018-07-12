// tslint:disable:max-line-length
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
 *  Services
******************************/

import { NewsService } from '../../services/index';

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
			0: { items: 3},
			900: { items: 5 }
		}
	};

	news: Array<INewsArticle> = [ ];

	constructor(private newsService: NewsService) { }

	ngOnInit() {
		this.newsService.getNews().subscribe(res => {
			this.news = res;
		}, err => {
			console.log(err);
		});
	}

}
