/*****************************
 *  Package Imports
******************************/

import { Component, OnInit, OnDestroy } from '@angular/core';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/

import { AdoptService } from '../../services/adopt.service';

/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-adopt',
	templateUrl: './adopt.component.html',
	styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit, OnDestroy {
	private adoptSubscription: Subscription;

	fakeImages: Array<string> = [];

	constructor(private adoptService: AdoptService) { }

	ngOnInit() {
		this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
			console.log(res);
		});

		for (let index = 0; index < 20; index++) {
			this.fakeImages[index] = '../../../assets/img/news_placeholder.jpg';
		}
	}

	ngOnDestroy() {
		if (this.adoptSubscription) {
			this.adoptSubscription.unsubscribe();
		}
	}

}
