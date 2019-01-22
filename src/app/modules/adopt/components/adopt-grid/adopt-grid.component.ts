/*****************************
*  Package Imports
******************************/

import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/

import { AdoptService } from '../../services/index';
import { EventService } from '../../../../services/index';

/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../../interfaces/index';
import { AnimalTypeEnum } from '../../../shared/enums/index';

/*****************************
*  Third-Party
******************************/

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-adopt-grid',
	templateUrl: './adopt-grid.component.html',
	styleUrls: ['./adopt-grid.component.css']
})
export class AdoptGridComponent implements OnInit, OnDestroy, OnChanges {
	@Input() animalTypeFilter: AnimalTypeEnum;

	private adoptSubscription: Subscription;

	fakeImages: Array<string> = [];
	adoptions: Array<IAdopt> = [];
	filteredAdoptions: Array<IAdopt> = [];

	animalType = AnimalTypeEnum;

	constructor(private adoptService: AdoptService, private eventService: EventService) { }

	ngOnInit() {
		// this.adoptSubscription = this.adoptService.getAdoptions().subscribe((res) => {
		// 	this.populateAdoptGrid(res);
		// });
		// tslint:disable: max-line-length

		this.fakeDataPop();
	}

	ngOnChanges(changes: SimpleChanges) {
		const animalTypeFilter: any = changes.animalTypeFilter;

		if (animalTypeFilter && animalTypeFilter.currentValue) {
			this.toggleAnimalTypeChange(animalTypeFilter.currentValue);
		}
	}

	ngOnDestroy() {
		if (this.adoptSubscription) {
			this.adoptSubscription.unsubscribe();
		}
	}

	fakeDataPop(): void {
		// TODO junk data delete me && add eventservice kicker for animal pop
		this.adoptions.push(
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' },
			{ animalType: AnimalTypeEnum.CAT, animalBreed: 'Himalayan Fluff ball', animalGender: 'Female', impoundNum: '2223', animalID: '123', animalName: 'Peanut', age: '5' },
			{ animalType: AnimalTypeEnum.DOG, animalBreed: 'Poodle doodle dandy', animalGender: 'Male', impoundNum: '2223', animalID: '123', animalName: 'Butter' }
		);
		this.filteredAdoptions = this.adoptions;

		for (let index = 0; index < 20; index++) {
			this.fakeImages[index] = '../../../assets/img/news_placeholder.jpg';
		}

		this.eventService.animalsPopulatedSubject.next(this.adoptions);
	}

	// populateAdoptGrid(adoptions: Array<IAdopt>): void {
	// 	adoptions.forEach(adoption => {
	// 		// TODO change later
	// 		if (adoption.animalName) {
	// 			this.adoptions.push(adoption);
	// 		}
	// 	});

	// TODO change this to be handled on backend
	private toggleAnimalTypeChange(animalType: AnimalTypeEnum): void {

		switch (animalType) {
			case AnimalTypeEnum.BOTH:
				this.filteredAdoptions = this.adoptions.filter(adoption =>
					adoption.animalType === AnimalTypeEnum.DOG ||
					adoption.animalType === AnimalTypeEnum.CAT);
				break;
			default:
				this.filteredAdoptions = this.adoptions.filter(adoption =>
					adoption.animalType === animalType.toString());
				break;
		}
	}

}
