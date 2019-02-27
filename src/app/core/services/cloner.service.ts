/********************************
* Package and class imports
*******************************/

import { Injectable } from '@angular/core';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/
/********************************
* Classes, interfaces, directives, pipes
*******************************/
/********************************
* Services
*******************************/
/********************************
* Third-party
*******************************/

import * as clone from 'clone';

/********************************
* Declaration
*******************************/
@Injectable({
	providedIn: 'root'
})
export class ClonerService {

	deepClone<T>(value): T {
		return clone<T>(value);
	}
}
