/*****************************
*  Package Imports
******************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*****************************
*  Components
******************************/

import {
	AdoptComponent, AdoptGridComponent,
	AdoptFilterComponent, AdoptDropdownComponent,
	AdoptDetailComponent
} from './components/index';

import { AdoptRoutingModule } from './adopt-routing.module';

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
		AdoptRoutingModule,
		NgSelectModule
	],
	declarations: [
		AdoptComponent,
		AdoptGridComponent,
		AdoptFilterComponent,
		AdoptDropdownComponent,
		AdoptDetailComponent
	]
})
export class AdoptModule { }
