/*****************************
*  Package Imports
******************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

/*****************************
*  Components
******************************/

import { AdoptFilterComponent } from './adopt-filter.component';
import { AdoptDropdownComponent } from './adopt-dropdown/adopt-dropdown.component';

/*****************************
*  Services
******************************/

import { EventService } from 'src/app/core/services';
import { FilterService } from '../../services/filter.service';

/*****************************
*  Interfaces / enums / classes
******************************/

import { AnimalOptionsEnum } from '../../enums/animal-opt-enum.enum';
import { IAdopt, IAdoptFilter } from '../../interfaces';
import { AnimalTypeEnum } from 'src/app/modules/shared/enums';

/*****************************
*  Third-Party
******************************/

import { NgSelectModule } from '@ng-select/ng-select';

describe('AdoptFilterComponent', () => {
	let component: AdoptFilterComponent;
	let fixture: ComponentFixture<AdoptFilterComponent>;
	let eventService: EventService;
	let filterService: FilterService;

	const adoptions: Array<IAdopt> = [
		{
			'id': '5b078a4b3a9ee4f9c826ef35',
			'impoundNum': 'K18-108391',
			'animalID': 'A558083',
			'dataSource': 'Regional Animal Services of King County',
			'recordType': 'FOUND',
			'currentLocation': 'In Public Home',
			'animalName': 'Hefer',
			'animalType': AnimalTypeEnum.DOG,
			'age': '',
			'animalGender': 'Female',
			'animalBreed': 'Siberian Husky',
			'date': new Date('December 17, 1995 03:24:00'),
			'dateType': 'Date Found',
			'obfuscatedAddress': '2200 27TH ST SE',
			'city': 'AUBURN',
			'state': 'WA',
			'zip': '98002',
			'jurisdiction': 'AUBURN',
			'image': 'https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=1864079',
			'ageGroup': 'NO AGE'
		},
		{
			'id': '5b078a4b3a9ee4f92222222',
			'impoundNum': 'K18-108391',
			'animalID': 'A558083',
			'dataSource': 'Regional Animal Services of King County',
			'recordType': 'FOUND',
			'currentLocation': 'In Public Home',
			'animalName': 'Tonto',
			'animalType': AnimalTypeEnum.DOG,
			'age': '',
			'animalGender': 'Female',
			'animalBreed': 'Siberian Husky',
			'date': new Date('December 17, 1995 03:24:00'),
			'dateType': 'Date Found',
			'obfuscatedAddress': '2200 27TH ST SE',
			'city': 'AUBURN',
			'state': 'WA',
			'zip': '98002',
			'jurisdiction': 'AUBURN',
			'image': 'https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=1864079',
			'ageGroup': 'NO AGE'
		}
	];
	const filteredAdoptions: Array<IAdopt> = [adoptions[0]];

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AdoptFilterComponent,
				AdoptDropdownComponent
			],
			providers: [
				HttpClient,
				HttpHandler,
				EventService
			],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				NgSelectModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptFilterComponent);
		eventService = TestBed.get(EventService);
		filterService = TestBed.get(FilterService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have an adoptions collection', () => {
		expect(component.adoptions).toBeDefined();
	});

	it('should have an animalBreeds collection', () => {
		expect(component.animalBreeds).toBeDefined();
	});

	it('should have an animalAges collection', () => {
		expect(component.animalAges).toBeDefined();
	});

	it('should have an animalAgesMap', () => {
		expect(component.animalAgesMap).toBeDefined();
	});

	it('should set adoptions when populated', () => {
		eventService.animalsPopulatedSubject.next(adoptions);

		expect(component.adoptions).toEqual(adoptions);
		expect(component.animalBreeds).toEqual([adoptions[0].animalBreed]);
		expect(component.animalAges).toEqual(['NO AGE']);
	});

	it('should call onFilterChange', () => {
		const filter: IAdoptFilter = {
			filterType: AnimalOptionsEnum.BREED,
			filterOptions: ['Husky']
		};

		spyOn(component.animalFilterChange, 'emit');

		component.onFilterChange(filter);

		expect(component.animalFilterChange.emit).toHaveBeenCalled();
	});

	it('should call onFilterChange', () => {
		const filter: IAdoptFilter = {
			filterType: AnimalOptionsEnum.BREED,
			filterOptions: ['Husky']
		};

		spyOn(component, 'onFilterChange');

		component.onFilterChange(filter);

		expect(component.onFilterChange).toHaveBeenCalledWith(filter);
	});

	it('should call onAnimalTypeChange', () => {
		spyOn(component, 'onAnimalTypeChange');

		component.onAnimalTypeChange(AnimalTypeEnum.CAT);

		expect(component.onAnimalTypeChange).toHaveBeenCalledWith(AnimalTypeEnum.CAT);
	});

	it('should create a IAdoptFilter object when onAnimalTypeChange is called', () => {
		const filter: IAdoptFilter = {
			filterType: AnimalOptionsEnum.TYPE,
			filterOptions: [AnimalTypeEnum.CAT]
		};

		spyOn(component, 'onFilterChange');

		component.onAnimalTypeChange(AnimalTypeEnum.CAT);

		expect(component.onFilterChange).toHaveBeenCalledWith(filter);
	});

	it('should call updateDropdowns', () => {
		spyOn(component, 'updateDropdowns');

		component.updateDropdowns();

		expect(component.updateDropdowns).toHaveBeenCalled();
	});
});
