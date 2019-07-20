/*****************************
*  Package Imports
******************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*****************************
*  Components
******************************/

import { AdoptDetailComponent } from './components/index';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/

const routes: Routes = [
	{
		path: 'adoption/:animal_id',
		component: AdoptDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AdoptRoutingModule { }