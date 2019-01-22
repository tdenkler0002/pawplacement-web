/*****************************
*  Package Imports
******************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*****************************
*  Components
******************************/

import {
	AdoptComponent, AdoptGridComponent, AdoptSearchComponent,
	AdoptFilterComponent, AdoptDropdownComponent
} from './components/index';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

/*****************************
*  Third-Party
******************************/


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AdoptComponent,
		AdoptGridComponent,
		AdoptSearchComponent,
		AdoptFilterComponent,
		AdoptDropdownComponent
	]
})
export class AdoptModule { }
