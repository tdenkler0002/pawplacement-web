/*****************************
 *  Package imports
******************************/

import { Component, OnInit } from '@angular/core';

/*****************************
 *  Components
******************************/

import { NavbarComponent, HomeLinksComponent, FooterComponent } from '../index';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
