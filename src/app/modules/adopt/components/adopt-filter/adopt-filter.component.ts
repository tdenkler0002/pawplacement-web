/********************************
* Package and class imports
*******************************/

import { Component, OnInit, OnDestroy } from '@angular/core';
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

/********************************
* Services
*******************************/

import { EventService } from 'src/app/services';
import { IAdopt } from '../../interfaces';

/********************************
* Third-party
*******************************/
/********************************
* Declaration
*******************************/

@Component({
	selector: 'app-adopt-filter',
	templateUrl: './adopt-filter.component.html',
	styleUrls: ['./adopt-filter.component.css']
})
export class AdoptFilterComponent implements OnInit, OnDestroy {

	animalOptionsEnum = AnimalOptionsEnum;
	animalsPopulated: Subscription;
	animals: Array<IAdopt>;

	animalBreeds: Array<string> = [];

	constructor(private eventService: EventService) { }

	ngOnInit() {
		this.animalsPopulated = this.eventService.animalsPopulatedSubject.subscribe((animals) => {
			this.animals = animals;
			this.updateDropdowns();
		});
	}

	ngOnDestroy() {
		this.animalsPopulated.unsubscribe();
	}

	private updateDropdowns(): void {
		this.filterByBreed(this.animals.map())
	}

}
