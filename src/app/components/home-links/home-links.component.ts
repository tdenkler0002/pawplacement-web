/*****************************
 *  Package imports
******************************/

import { Component, OnInit, HostListener,
	ViewChild, ElementRef, Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

/*****************************
 *  Components
******************************/

/*****************************
 *  Classes / pipes / enums
******************************/

import { LinkTypesEnum } from '../../modules/shared/enums/index';

/*****************************
 *  Third-Party
******************************/

import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
	selector: 'app-home-links',
	templateUrl: './home-links.component.html',
	styleUrls: ['./home-links.component.css']
})
export class HomeLinksComponent implements OnInit {
	linkType = LinkTypesEnum;

	sliderOptions = {
		items: 3,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 3000,
		dots: true,
		responsive: {
			0: {
				items: 2,
				navigation: false
			},
			900: {
				items: 3
			}
		}
	};

	// TODO: Look at removing document?
	constructor(@Inject(DOCUMENT) private document: any) { }

	ngOnInit() {
	}
}
