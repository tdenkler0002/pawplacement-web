/*****************************
 *  Package Imports
******************************/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/*****************************
*  Components
******************************/
/*****************************
*  Services
******************************/
/*****************************
*  Interfaces / enums / classes
******************************/

import { IAdopt } from '../interfaces/index';
import { AnimalTypeEnum } from 'src/app/enums';

/*****************************
*  Third-Party
******************************/

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api/pets/';

@Injectable({
	providedIn: 'root'
})
export class AdoptService {

	constructor(private http: HttpClient) { }

	getAdoptions(): Observable<any> {
		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.mapAdoptions),
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse): Observable<string> {
		// Check to see if part of class
		if (error.error instanceof ErrorEvent) {
			// Client-side error happens
			console.error('An error occurred:', error.error.message);
		} else {
			// Back-end returned an unsuccessful response code
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}

		// return observable with user-facing error msg
		return throwError('Ruh roh! Something bad happened; please try again later.');
	}

	private mapAdoptions(res: any): Array<IAdopt> {
		const adoptions: Array<IAdopt> = [];

		for (const adoption of res) {
			const adopt: IAdopt = {
				id: adoption._id,
				impoundNum: adoption.impound_no,
				animalID: adoption.Animal_ID,
				dataSource: adoption.Data_Source,
				recordType: adoption.Record_Type,
				currentLocation: adoption.Current_Location,
				animalName: adoption.Animal_Name,
				animalType: adoption.animal_type,
				age: adoption.Age,
				animalGender: adoption.Animal_Gender,
				animalBreed: adoption.Animal_Breed,
				date: adoption.Date,
				dateType: adoption.Date_Type,
				obfuscatedAddress: adoption.Obfuscated_Address,
				city: adoption.City,
				state: adoption.State,
				zip: adoption.Zip,
				jurisdiction: adoption.jurisdiction,
				image: adoption.Image
			};

			adoptions.push(adopt);
		}

		return adoptions;
	}
}
