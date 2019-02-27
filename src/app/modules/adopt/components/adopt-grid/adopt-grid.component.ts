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
import { EventService } from '../../../../core/services/index';

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

	animalType = AnimalTypeEnum;

	constructor() { }

	ngOnInit() { }

}
