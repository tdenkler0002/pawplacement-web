/*****************************
*  Package Imports
******************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****************************
*  Components
******************************/

import {
	AdoptComponent, AdoptGridComponent,
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

import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgSelectModule
	],
	declarations: [
		AdoptComponent,
		AdoptGridComponent,
		AdoptFilterComponent,
		AdoptDropdownComponent
	]
})
export class AdoptModule { }
