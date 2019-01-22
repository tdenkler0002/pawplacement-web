/********************************
* Package and class imports
*******************************/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/

import { AdoptFilterComponent } from '../index';

/********************************
* Classes, interfaces, directives, pipes
*******************************/

import { AnimalTypeEnum } from '../../../shared/enums/index';
import { EventService } from 'src/app/services/index';
import { IAdopt } from '../../interfaces';

/********************************
* Services
*******************************/
/********************************
* Third-party
*******************************/
/********************************
* Declaration
*******************************/

@Component({
	selector: 'app-adopt-search',
	templateUrl: './adopt-search.component.html',
	styleUrls: ['./adopt-search.component.css']
})
export class AdoptSearchComponent implements OnInit {
	@Output() animalFilterChange: EventEmitter<AnimalTypeEnum> = new EventEmitter();

	animalTypeEnum = AnimalTypeEnum;

	constructor(private eventService: EventService) { }

	ngOnInit() {

	}

	onFilterSelect(animalFilter: AnimalTypeEnum) {
		this.animalFilterChange.emit(animalFilter);
	}
}
