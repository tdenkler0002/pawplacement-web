// tslint:disable:max-line-length
/*****************************
 *  Package imports
******************************/

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

/*****************************
 *  Components
******************************/

import { NewsItemComponent } from '../index';

/*****************************
 *  Interfaces/Pipes/Class imports
******************************/

import { INewsArticle } from '../../modules/shared/interfaces/index';

/*****************************
 *  Services
******************************/

import { NewsService } from '../../core/services/index';

/*****************************
 *  Third-Party
******************************/

import { OwlCarousel } from 'ngx-owl-carousel';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
	private newsSubscription: Subscription;

	@ViewChild('owlElement') owlElement: OwlCarousel;

	sliderOptions = {
		items: 3,
		autoplay: false,
		smartSpeed: 500,
		dots: true,
		responsive: {
			0: { items: 1 },
			700: { items: 2 },
			1400: { items: 3 }
		}
	};

	news: Array<INewsArticle> = [ ];

	constructor(private newsService: NewsService) { }

	ngOnInit() {
		this.newsSubscription = this.newsService.getNews().subscribe(res => {
			this.news = res;
		}, err => {
			console.log(err);
		});
	}

	ngOnDestroy() {
		if (this.newsSubscription) {
			this.newsSubscription.unsubscribe();
		}
	}

	onNavigate(navigate: string): void {
		if (navigate === 'next') {
			this.owlElement.next([500]);
		}

		if (navigate === 'prev') {
			this.owlElement.previous([500]);
		}
	}

}
