/********************************
* Package and class imports
*******************************/

import { TestBed } from '@angular/core/testing';

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

import { ClonerService } from './cloner.service';

/********************************
* Third-party
*******************************/
/********************************
* Declaration
*******************************/
describe('ClonerService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ClonerService = TestBed.get(ClonerService);
		expect(service).toBeTruthy();
	});
});
