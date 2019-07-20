/*****************************
*  Package Imports
******************************/

import { Component, OnInit, Input,
	Output, EventEmitter
} from '@angular/core';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../../interfaces/index';
import { AnimalTypeEnum } from '../../../shared/enums/index';

/*****************************
*  Third-Party
******************************/

@Component({
	selector: 'app-adopt-grid',
	templateUrl: './adopt-grid.component.html',
	styleUrls: ['./adopt-grid.component.css']
})
export class AdoptGridComponent implements OnInit {
	@Input() filteredAdoptions: Array<IAdopt> = [];
	@Output() adoptionSelected: EventEmitter<IAdopt> = new EventEmitter();

	animalType = AnimalTypeEnum;

	constructor() { }

	ngOnInit() { }
}
