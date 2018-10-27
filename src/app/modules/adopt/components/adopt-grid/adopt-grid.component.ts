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

import { IAdopt } from '../../interfaces/index';

/*****************************
*  Third-Party
******************************/

import { Subscription } from 'rxjs';
import { AnimalTypeEnum } from 'src/app/enums';

@Component({
	selector: 'app-adopt-grid',
	templateUrl: './adopt-grid.component.html',
	styleUrls: ['./adopt-grid.component.css']
})
export class AdoptGridComponent implements OnInit, OnDestroy {
	private adoptSubscription: Subscription;

	fakeImages: Array<string> = [];
	adoptions:  Array<IAdopt> = [];

	animalType = AnimalTypeEnum;

	constructor(private adoptService: AdoptService) { }

	ngOnInit() {
		this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
			this.populateAdoptGrid(res);
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

	populateAdoptGrid(adoptions: Array<IAdopt>): void {
		adoptions.forEach(adoption => {
			// TODO change later
			if (adoption.animalName) {
				this.adoptions.push(adoption);
			}
		});

	}
}
