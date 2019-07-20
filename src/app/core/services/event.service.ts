/*****************************
*  Package Imports
******************************/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/*****************************
*  Components
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../../modules/adopt/interfaces/index';

/*****************************
*  Third-Party
******************************/

@Injectable({
	providedIn: 'root'
})
export class EventService {

	animalsPopulatedSubject = new Subject<{animals: Array<IAdopt>, filtered: boolean}>();

	constructor() { }

}
