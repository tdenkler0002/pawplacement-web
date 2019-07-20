/*****************************
*  Package Imports
******************************/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/

import { AdoptService } from '../../services';

/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../../interfaces/adopt.interface';

/*****************************
*  Third-Party
******************************/

@Component({
	selector: 'app-adopt-detail',
	templateUrl: './adopt-detail.component.html',
	styleUrls: ['./adopt-detail.component.css']
})
export class AdoptDetailComponent implements OnInit, OnDestroy {
	adoptionRouteSubscription: Subscription = new Subscription();

	selectedAdoption: IAdopt;

	constructor(private activatedRoute: ActivatedRoute, private adoptService: AdoptService) { }

	ngOnInit() {
		this.adoptionRouteSubscription = this.activatedRoute.paramMap.subscribe((routeParams: any) => {
			debugger;
			this.getAdoptionDetails(routeParams.params.animal_id);
		});
	}

	ngOnDestroy() {
		if (this.adoptionRouteSubscription) {
			this.adoptionRouteSubscription.unsubscribe();
		}
	}

	getAdoptionDetails(animalId: string): void {
		this.adoptService.getAdoptionDetail(animalId).subscribe(detail => {
			console.log(detail);
		});
	}

}
