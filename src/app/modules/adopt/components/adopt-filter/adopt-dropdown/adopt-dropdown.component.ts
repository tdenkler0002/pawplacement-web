/********************************
* Package and class imports
*******************************/

import {
	Component, OnInit, Input,
	Output, EventEmitter
} from '@angular/core';

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
import { IAdoptFilter } from '../../../interfaces/adopt-filter.interface';

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
	@Input() dropdownOptions: Array<string>;
	@Input() dropdownPlaceholder: string;

	@Output() optionChange: EventEmitter<IAdoptFilter> = new EventEmitter();

	selectedOptions: Array<string> = [];

	constructor() { }

	ngOnInit() { }

	onOptionChange(event: any): void {
		this.optionChange.emit({filterType: this.dropdownType, filterOptions: this.selectedOptions});
	}


}
