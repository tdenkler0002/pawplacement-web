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

import { AdoptService } from '../../services';
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
	}

	ngOnDestroy() {
		if (this.adoptSubscription) {
			this.adoptSubscription.unsubscribe();
		}
	}

	getAnimals(): void {
		this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
			this.populateAdoptions(res);

			this.eventService.animalsPopulatedSubject.next({animals: this.adoptions, filtered: false});
		});
	}

	onAnimalFilterChange(animalFiltersQuery: string): void {
		animalFiltersQuery.length === 0 ?
			this.handleUpdatedAdoptions(this.adoptions) :
			this.adoptService.getFilteredAdoptions(animalFiltersQuery).subscribe(filtered => {
				this.handleUpdatedAdoptions(filtered);
			});
	}

	populateAdoptions(adoptions: Array<IAdopt>): void {
		this.filteredAdoptions = this.adoptions;

		adoptions.forEach(adoption => {
			// TODO change later - some may not have names
			if (adoption.animalName) {
				this.adoptions.push(adoption);
			}
		});

		this.createPlaceholderImages();
	}

	private handleUpdatedAdoptions(adoptions: Array<IAdopt>): void {
		this.filteredAdoptions = adoptions;
		this.eventService.animalsPopulatedSubject.next({animals: this.filteredAdoptions, filtered: true});
	}

	private createPlaceholderImages(): void {
		for (let index = 0; index > this.filteredAdoptions.length; index++) {
			this.fakeImages[index] = '../../../assets/img/news_placeholder.jpg';
		}
	}
}
