/********************************
* Package and class imports
*******************************/

import { Component, OnInit, Input } from '@angular/core';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/
/********************************
* Classes, interfaces, directives, pipes
*******************************/

import { AnimalOptionsEnum } from '../../../enums/index';

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
	selector: 'app-adopt-dropdown',
	templateUrl: './adopt-dropdown.component.html',
	styleUrls: ['./adopt-dropdown.component.css']
})
export class AdoptDropdownComponent implements OnInit {
	@Input() dropdownType: AnimalOptionsEnum;

	constructor() { }

	ngOnInit() {}

}
