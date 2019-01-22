/*****************************
 *  Package Imports
******************************/

import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

/*****************************
*  Components
******************************/

import { AdoptGridComponent } from '../index';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

import { AnimalTypeEnum } from 'src/app/modules/shared/enums';

/*****************************
*  Third-Party
******************************/

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-adopt',
	templateUrl: './adopt.component.html',
	styleUrls: ['./adopt.component.css']
})

export class AdoptComponent implements OnInit {

	animalTypeFilter: AnimalTypeEnum = AnimalTypeEnum.BOTH;

	constructor() { }

	ngOnInit() { }

	onAnimalFilterChange(animalTypeFilter: AnimalTypeEnum) {
		this.animalTypeFilter = animalTypeFilter;
	}

}
