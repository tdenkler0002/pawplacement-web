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

import { OwlCarousel } from 'ngx-owl-carousel';

/*****************************
 *  Classes / pipes / enums
******************************/

import { LinkTypesEnum } from '../../enums/link-types.enum';


@Component({
	selector: 'home-links',
	templateUrl: './home-links.component.html',
	styleUrls: ['./home-links.component.css']
})
export class HomeLinksComponent implements OnInit {
	linkType = LinkTypesEnum;
	
	textHovered = false;

	adoptText: string = '';
	donateText: string = '';
	volunteerText: string = '';
	resourcesText: string = '';
	aboutText: string = '';

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

	constructor(@Inject(DOCUMENT) private document: any) { }

	ngOnInit() {
	}

	populateHoverText(linkPage: LinkTypesEnum): void {	
		switch (linkPage) {
			case LinkTypesEnum.Adopt:
				this.adoptText = 'Learn How to Adopt, See Our Available Cats and Dogs and Recent Adoptions.';
				break;

			case LinkTypesEnum.Volunteer:
				this.volunteerText = 'Join our Team! Become an Adoption Rep, Foster parent, Kitty Caretaker or Dog Walker';
				break;

			case LinkTypesEnum.Donate:
				this.donateText = 'Make a monetary gift, Donate an item, Donate in Honor Of';
				break;

			case LinkTypesEnum.Resources:
				this.resourcesText = 'Veterinary Clinics, Emergency Clinics, Training, Grooming, Boarding, Photography';
			break;

			case LinkTypesEnum.About:
				this.aboutText = 'About Text will go here';
			break;

			default:
				break;
		}

		this.toggleHoverText(true);
	}

	private toggleHoverText(showText: boolean): void {
		this.textHovered = showText;

		// reset hover text
		if (!this.textHovered) {
			this.adoptText = '';
			this.donateText = '';
			this.resourcesText = '';
			this.volunteerText = '';
			this.aboutText  = '';
		}
	}

}
