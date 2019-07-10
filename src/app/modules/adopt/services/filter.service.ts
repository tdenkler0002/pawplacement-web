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

import { AdoptService } from './adopt.service';

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
	currentFilters: Array<IAdoptFilter> = [];
	animalOptionsEnum = AnimalOptionsEnum;

	constructor(private adoptService: AdoptService) { }

	buildFilters(filter: IAdoptFilter): string {
		this.checkFilterStatus(filter);

		return this.createFilterQuery();
	}

	private checkFilterStatus(filter: IAdoptFilter): void {
		// If filter already exists, remove to re-add filter i.e ['trex'] to ['trex', 'poodle']
		_.remove(this.currentFilters, (f) => f.filterType === filter.filterType);

		if (filter.filterOptions.length) {
			this.currentFilters.push(filter);
		}
	}

	private createFilterQuery(): string {
		let filterQuery = '';

		this.currentFilters.forEach(f => {
			switch (f.filterType) {
				case AnimalOptionsEnum.AGE:
					filterQuery = this.buildAgeQuery(f, filterQuery);
					break;

				case AnimalOptionsEnum.BREED:
					const breeds = f.filterOptions.map(b => `'${b}'`).join(',');
					filterQuery = filterQuery.concat(`?breed=[${breeds}]`);
					break;

				case AnimalOptionsEnum.GENDER:
					filterQuery = filterQuery.concat(`?gender='${f.filterOptions}'`);
					break;

				case AnimalOptionsEnum.TYPE:
					if (f.filterOptions[0] === AnimalTypeEnum.BOTH) {
						break;
					}
					filterQuery = filterQuery.concat(`?type=${f.filterOptions[0]}`);
					break;

				default:
					break;
			}
		});

		return filterQuery;
	}

	private buildAgeQuery(filter: IAdoptFilter, filterQuery: string): string {
		const ages = [];

		filter.filterOptions.forEach(age => {
			ages.push(...Array.from(this.adoptService.animalAgeGroups.get(age)));
		});

		const formattedAges: string  = ages.map(a => `'${a}'`).join(',');

		return filterQuery.concat(`?Age=[${formattedAges}]`);
	}
}
