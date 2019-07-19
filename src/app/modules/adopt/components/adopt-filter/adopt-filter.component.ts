/********************************
* Package and class imports
*******************************/

import { Component, OnInit, OnDestroy,
	Output, EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/

import { AdoptDropdownComponent } from '../index';

/********************************
* Classes, interfaces, directives, pipes
*******************************/

import { AnimalOptionsEnum } from '../../enums/index';
import { IAdopt, IAdoptFilter } from '../../interfaces';
import { AnimalTypeEnum } from 'src/app/modules/shared/enums';

/********************************
* Services
*******************************/

import { EventService, ClonerService } from '../../../../core/services';
import { FilterService } from '../../services';

/********************************
* Third-party
*******************************/

import * as _ from 'lodash';

/********************************
* Declaration
*******************************/

@Component({
	selector: 'app-adopt-filter',
	templateUrl: './adopt-filter.component.html',
	styleUrls: ['./adopt-filter.component.css']
})
export class AdoptFilterComponent implements OnInit, OnDestroy {
	@Output() animalFilterChange: EventEmitter<string> = new EventEmitter();

	animalOptionsEnum = AnimalOptionsEnum;
	animalTypeEnum = AnimalTypeEnum;

	animalsPopulated: Subscription;
	adoptions: Array<IAdopt> = [];
	animalBreeds: Array<string> = [];
	animalAges: Array<string> = [];
	animalAgesMap: Map<string, Array<IAdopt>> = new Map();

	constructor(private eventService: EventService, private clonerService: ClonerService, private filterService: FilterService) {
		this.animalsPopulated = this.eventService.animalsPopulatedSubject.subscribe((animals) => {
			this.adoptions = animals;
			this.updateDropdowns();
		});
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.animalsPopulated.unsubscribe();
	}

	onFilterChange(event: IAdoptFilter): void {
		const filterQuery: string = this.filterService.buildFilters(event);

		this.animalFilterChange.emit(filterQuery);
	}

	onAnimalTypeChange(event: AnimalTypeEnum): void {
		const animalFilter: IAdoptFilter = {
			filterType: AnimalOptionsEnum.TYPE,
			filterOptions: [event]
		};

		this.onFilterChange(animalFilter);
	}

	updateDropdowns(): void {
		this.animalBreeds = this.getAnimalBreeds();
		this.animalAges = this.getAnimalAges();
	}

	private getAnimalBreeds(): Array<string> {
		// TODO: This will most likely change to query breeds from svc
		const uniqueAnimalBreeds: Set<string> = new Set();
		this.adoptions.forEach(animal => uniqueAnimalBreeds.add(animal.animalBreed));

		return this.clonerService.deepClone<Array<string>>(Array.from(uniqueAnimalBreeds)).sort();
	}

	private getAnimalAges(): Array<string> {
		const uniqueAgeGroups: Set<string> = new Set();
		this.adoptions.forEach(animal => uniqueAgeGroups.add(animal.ageGroup));

		return this.clonerService.deepClone<Array<string>>(Array.from(uniqueAgeGroups)
			.sort((age1, age2) => age1.localeCompare(age2, undefined, {numeric: true})));
	}
}
