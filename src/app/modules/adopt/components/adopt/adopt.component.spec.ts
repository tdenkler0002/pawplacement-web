/*****************************
*  Package Imports
******************************/

import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/

import { AdoptService } from '../../services';

/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../../interfaces';

/*****************************
*  Third-Party
******************************/

import { NgSelectModule } from '@ng-select/ng-select';

/*****************************
 *  Components
******************************/

import { AdoptComponent } from './adopt.component';
import { AdoptFilterComponent } from '../adopt-filter/adopt-filter.component';
import { AdoptGridComponent } from '../adopt-grid/adopt-grid.component';
import { AdoptDropdownComponent } from '../adopt-filter/adopt-dropdown/adopt-dropdown.component';
import { AnimalTypeEnum } from 'src/app/modules/shared/enums';
import { filter } from 'rxjs/operators';

describe('AdoptComponent', () => {
	let component: AdoptComponent;
	let fixture: ComponentFixture<AdoptComponent>;
	let service: AdoptService;

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
				AdoptComponent,
				AdoptFilterComponent,
				AdoptGridComponent,
				AdoptDropdownComponent
			],
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				NgSelectModule
			],
			providers: [
				HttpClient,
				AdoptService,
				HttpHandler
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptComponent);
		component = fixture.componentInstance;
		service = TestBed.get(AdoptService);

	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a fakeImages collection', () => {
		expect(component.fakeImages).toBeDefined();
	});

	it('should have a adoptions collection', () => {
		expect(component.adoptions).toBeDefined();
	});

	it('should have a filteredAdoptions collection', () => {
		expect(component.filteredAdoptions).toBeDefined();
	});

	it('should subscribe to adoptService when getAnimals is called', () => {
		spyOn(service, 'getAdoptions').and.returnValue(of(adoptions));
		spyOn(component, 'populateAdoptions');
		component.getAnimals();

		fixture.detectChanges();

		expect(service.getAdoptions).toHaveBeenCalled();
		expect(component.populateAdoptions).toHaveBeenCalled();
	});

	it('should return and set adoptions when getAnimals is called', fakeAsync(() => {
		spyOn(service, 'getAdoptions').and.returnValue(of(adoptions));

		service.getAdoptions().subscribe(res => {
			expect(res).toEqual(adoptions);
		});

		component.getAnimals();

		expect(component.adoptions).toEqual(adoptions);
		expect(component.filteredAdoptions).toEqual(adoptions);
	}));

	it('should call onAnimalFilterChange', () => {
		spyOn(component, 'onAnimalFilterChange');

		component.onAnimalFilterChange('testQuery');

		expect(component.onAnimalFilterChange).toHaveBeenCalledWith('testQuery');
	});

	it('should use the original adoptions if filters are removed', () => {
		component.adoptions = adoptions;
		component.onAnimalFilterChange('');

		expect(component.adoptions).toEqual(adoptions);
	});

	it('should set filteredAdoptions and call out to service if filters applied', () => {
		const query = 'testQuery';
		component.adoptions = adoptions;

		spyOn(service, 'getFilteredAdoptions').and.returnValue(of(filteredAdoptions));

		service.getFilteredAdoptions(query).subscribe(res => {
			expect(res).toEqual(filteredAdoptions);
		});

		component.onAnimalFilterChange(query);

		expect(service.getFilteredAdoptions).toHaveBeenCalledWith(query);
		expect(component.filteredAdoptions).toEqual(filteredAdoptions);

		// Adoptions should not change
		expect(component.adoptions).toEqual(adoptions);
	});

	it('should call populateAdoptions', () => {
		spyOn(component, 'populateAdoptions');

		component.populateAdoptions(adoptions);

		expect(component.populateAdoptions).toHaveBeenCalledWith(adoptions);
	});

	it('should populate adoptions', () => {
		component.populateAdoptions(adoptions);

		expect(component.adoptions).toEqual(adoptions);
	});
});
