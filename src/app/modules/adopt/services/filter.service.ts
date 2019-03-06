/********************************
* Package and class imports
*******************************/

import { Injectable } from '@angular/core';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/
/********************************
* Classes, interfaces, directives, pipes
*******************************/

import { IAdoptFilter, IAdopt } from '../interfaces';
import { AnimalOptionsEnum } from '../enums';
import { AnimalTypeEnum } from '../../shared/enums';

/********************************
* Services
*******************************/
/********************************
* Third-party
*******************************/

import * as _ from 'lodash';
/********************************
* Declaration
*******************************/

@Injectable({
	providedIn: 'root'
})
export class FilterService {
	filteredAdoptions: Array<IAdopt> = [];
	currentFilters: Array<IAdoptFilter> = [];

	animalOptionsEnum = AnimalOptionsEnum;

	constructor() { }

	filterAdoptions(filter: IAdoptFilter, adoptions: Array<IAdopt>): Array<IAdopt> {
		debugger;
		this.checkFilterStatus(filter);

		this.filteredAdoptions = this.currentFilters.length ? this.handleFiltering(adoptions) :
			adoptions;

		return this.filteredAdoptions;
	}

	private checkFilterStatus(filter: IAdoptFilter): void {
		// If filter already exists, remove to re-add filter i.e ['trex'] to ['trex', 'poodle']
		_.remove(this.currentFilters, (f) => f.filterType === filter.filterType);

		if (filter.filterOptions.length) {
			this.currentFilters.push(filter);
		}
	}

	private handleFiltering(adoptions: Array<IAdopt>): Array<IAdopt> {
		let filteredAdoptions: Array<IAdopt> = [];
		let filtered = false;

		this.currentFilters.forEach(filter => {
			switch (filter.filterType) {
				case this.animalOptionsEnum.BREED:
					// TODO: handle this on svc query
					filteredAdoptions = filtered ?
						this.filterBreed(filteredAdoptions, filter.filterOptions) :
						this.filterBreed(adoptions, filter.filterOptions);

					filtered = true;
					break;

				case this.animalOptionsEnum.AGE:
					filteredAdoptions = filtered ?
						this.filterAge(filteredAdoptions, filter.filterOptions) :
						this.filterAge(adoptions, filter.filterOptions);

					filtered = true;
					break;

				case this.animalOptionsEnum.GENDER:
					filteredAdoptions = filtered ?
						this.filterGender(filteredAdoptions, filter.filterOptions) :
						this.filterGender(adoptions, filter.filterOptions);

					break;

				case this.animalOptionsEnum.TYPE:
					filteredAdoptions = filtered ?
						this.toggleAnimalTypeChange(filter.filterOptions[0] as AnimalTypeEnum, filteredAdoptions) :
						this.toggleAnimalTypeChange(filter.filterOptions[0] as AnimalTypeEnum, adoptions);

					filtered = true;
					break;

				default:
					break;
			}
		});

		// this.filteredAdoptions.push(...Array.from(uniqueAdoptions));
		const uniqueAdoptions = new Set(filteredAdoptions);
		return Array.from(uniqueAdoptions);
	}

	private filterBreed(adoptions: Array<IAdopt>, filters: Array<string>): Array<IAdopt> {
		return adoptions.filter(animal => filters.includes(animal.animalBreed));
	}

	private filterAge(adoptions: Array<IAdopt>, filters: Array<string>): Array<IAdopt> {
		return adoptions.filter(animal => filters.includes(animal.ageGroup));
	}

	private filterGender(adoptions: Array<IAdopt>, filters: Array<string>): Array<IAdopt> {
		return adoptions.filter(animal => filters.includes(animal.animalGender));
	}

	// TODO change this to be handled on backend
	private toggleAnimalTypeChange(animalType: AnimalTypeEnum, adoptions: Array<IAdopt>): Array<IAdopt> {
		switch (animalType) {
			case AnimalTypeEnum.BOTH:
				return adoptions.filter(adoption =>
					adoption.animalType === AnimalTypeEnum.DOG ||
					adoption.animalType === AnimalTypeEnum.CAT);
			default:
				return adoptions.filter(adoption =>
					adoption.animalType === animalType.toString());
		}
	}
}
