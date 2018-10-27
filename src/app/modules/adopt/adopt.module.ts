/*****************************
*  Package Imports
******************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*****************************
*  Components
******************************/

import {
	AdoptComponent, AdoptGridComponent, AdoptSearchComponent
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
		AdoptSearchComponent
	]
})
export class AdoptModule { }
