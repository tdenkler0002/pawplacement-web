// tslint:disable: max-line-length
/*****************************
 *  Package Imports
******************************/

import {
	Component, OnInit, OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';


/*****************************
*  Components
******************************/

import { AdoptGridComponent } from '../index';

/*****************************
*  Services
******************************/

import { AdoptService, FilterService } from '../../services';
import { EventService } from 'src/app/core/services';

/*****************************
*  Interfaces / enums / classes
******************************/

import { AnimalTypeEnum } from 'src/app/modules/shared/enums';
import { AnimalOptionsEnum } from '../../enums';
import { IAdoptFilter, IAdopt } from '../../interfaces';

/*****************************
*  Third-Party
******************************/

import * as _ from 'lodash';

@Component({
	selector: 'app-adopt',
	templateUrl: './adopt.component.html',
	styleUrls: ['./adopt.component.css']
})

export class AdoptComponent implements OnInit, OnDestroy {

	animalTypeFilter: IAdoptFilter;
	animalTypeEnum = AnimalTypeEnum;
	animalOptionsEnum = AnimalOptionsEnum;

	fakeImages: Array<string> = [];
	adoptions: Array<IAdopt> = [];
	filteredAdoptions: Array<IAdopt> = [];

	private adoptSubscription: Subscription;

	constructor(private adoptService: AdoptService,
		private eventService: EventService) { }

	ngOnInit() {
		this.getAnimals();
		// this.adoptService.getFilteredAdoptions('Siberian Husky');
	}

	ngOnDestroy() {
		if (this.adoptSubscription) {
			this.adoptSubscription.unsubscribe();
		}
	}

	getAnimals(): void {
		this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
			this.populateAdoptGrid(res);
			this.filteredAdoptions = this.adoptions;

			for (let index = 0; index > this.filteredAdoptions.length; index++) {
				this.fakeImages[index] = '../../../assets/img/news_placeholder.jpg';
			}

			this.eventService.animalsPopulatedSubject.next(this.adoptions);
		});
	}

	onAnimalFilterChange(animalFiltersQuery: string): void {
		if (animalFiltersQuery.length === 0) {
			this.filteredAdoptions = this.adoptions;
		} else {
			this.adoptService.getFilteredAdoptions(animalFiltersQuery).subscribe(filtered => this.filteredAdoptions = filtered);
		}

		this.eventService.animalsPopulatedSubject.next(this.filteredAdoptions);
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
