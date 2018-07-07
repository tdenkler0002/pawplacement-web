/*****************************
 *  Package imports
******************************/

import { Component, OnInit } from '@angular/core';

/*****************************
 *  Components
******************************/

import { NavbarComponent } from '../index';
import { HomeLinksComponent } from '../home-links/home-links.component';


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
