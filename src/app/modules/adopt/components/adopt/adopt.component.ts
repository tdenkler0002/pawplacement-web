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
		private eventService: EventService,
		private filterService: FilterService) { }

	ngOnInit() {
		// this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
		// 	this.populateAdoptGrid(res);
		// });
		// tslint:disable: max-line-length

		this.fakeDataPop();
	}

	ngOnDestroy() {
		if (this.adoptSubscription) {
			this.adoptSubscription.unsubscribe();
		}
	}

	fakeDataPop(): void {
		// TODO junk data delete me && add eventservice kicker for animal pop
		this.adoptions.push(
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '2 years 6 weeks' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter', age: '10 months' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'TRex', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '3 years 5 months' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Lion', animalGender: 'Female', impoundNum: '1111', animalID: '123', animalName: 'Butter', age: '12 years' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '18 years 3 weeks' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter', age: '6 months 2 weeks' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Barbie', animalGender: 'Female', impoundNum: '2223', animalID: '234', animalName: 'Peanut', age: '5 years' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter', age: '8 years 2 months' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '9 years' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '1231241', animalID: '556', animalName: 'Butter', age: '4 years 3 months' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '16 weeks' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter', age: '4 weeks' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '55552', animalName: 'Peanut', age: '9 years 2 months 4 weeks' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5 years 2 months' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '22451', animalName: 'Butter' }
		);

		this.adoptions.forEach(animal => {
			animal.ageGroup = animal.age ? this.adoptService.calculateAgeGroup(animal.age) : 'Age Not Listed';
		});

		this.filteredAdoptions = this.adoptions;

		for (let index = 0; index < 20; index++) {
			this.fakeImages[index] = '../../../assets/img/news_placeholder.jpg';
		}

		this.eventService.animalsPopulatedSubject.next(this.adoptions);
	}

	onAnimalFilterChange(animalFilter: IAdoptFilter) {
		this.filteredAdoptions = this.filterService.filterAdoptions(animalFilter, this.adoptions);

		// // Reset filters
		// this.filteredAdoptions = [];

		// debugger;
		// if (animalFilter.filterOptions.length) {
		// 	this.currentFilters.push(animalFilter);
		// 	this.handleFiltering();
		// } else {
		// 	_.remove(this.currentFilters, (filter) => filter.filterType === animalFilter.filterType);

		// 	// Reset to all if no filters - filter if other filters
		// 	this.currentFilters.length ? this.handleFiltering() :
		// 		this.filteredAdoptions = this.adoptions;
		// }
	}

	// populateAdoptGrid(adoptions: Array<IAdopt>): void {
	// 	adoptions.forEach(adoption => {
	// 		// TODO change later
	// 		if (adoption.animalName) {
	// 			this.adoptions.push(adoption);
	// 		}
	// 	});
}
