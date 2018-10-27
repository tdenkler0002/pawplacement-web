/*****************************
 *  Package Imports
******************************/

import { Component, OnInit, OnDestroy } from '@angular/core';

/*****************************
*  Components
******************************/

import { AdoptGridComponent } from '../index';

/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/
/*****************************
*  Third-Party
******************************/

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-adopt',
	templateUrl: './adopt.component.html',
	styleUrls: ['./adopt.component.css']
})

export class AdoptComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}
