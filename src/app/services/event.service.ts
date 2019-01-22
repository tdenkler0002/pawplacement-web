/*****************************
*  Package Imports
******************************/

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

/*****************************
*  Components
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../modules/adopt/interfaces/index';

/*****************************
*  Third-Party
******************************/

@Injectable({
	providedIn: 'root'
})
export class EventService {

	animalsPopulatedSubject = new BehaviorSubject<Array<IAdopt> | undefined>(undefined);

	constructor() { }

}
