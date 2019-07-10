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

/*****************************
*  Third-Party
******************************/

@Injectable({
	providedIn: 'root'
})
export class AdoptService {

	apiUrl = '/api/pets/';
	httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
	animalAgeGroups: Map<string, Set<string>> = new Map();

	constructor(private http: HttpClient) { }

	getAdoptions(): Observable<any> {
		return this.http.get(this.apiUrl, this.httpOptions).pipe(
			map((res) => this.mapAdoptions(res)),
			catchError(this.handleError)
		);
	}

	getFilteredAdoptions(filterQuery: string): Observable<any> {
		return this.http.get(`${this.apiUrl}/filters/${filterQuery}`, this.httpOptions).pipe(
			map((res) => {
			}),
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
			adopt.ageGroup = adopt.age && adopt.age.length !== 0 ?
				this.calculateAgeGroup(adopt.age) :
				'NO AGE';

			adoptions.push(adopt);
		}

		return adoptions;
	}

	// TODO: figure out ordering
	private calculateAgeGroup(age: any): string {
		const yearRegex = /(\d{1,2}\s?\byears?\s?)/i;
		const monthRegex = /(\d{1,2}\s?\bmonths?\s?)/i;
		const weekRegex = /(\d{1,2}\s?\bweeks?\s?)/i;

		let ageGroup = age;

		if (yearRegex.test(age)) {
			ageGroup = this.ageGroupInYears(age);
		} else if (monthRegex.test(age)) {
			ageGroup = this.ageGroupInMonths(age);
		} else if (weekRegex.test(age)) {
			ageGroup = this.ageGroupInWeeks(age);
		}

		this.createAgeGroupFilterLookup(age, ageGroup);

		return ageGroup;
	}

	private ageGroupInYears(originalAge: string): string {
		const numRegex = /(\d{1,2})/i;
		const age = Number(originalAge.match(numRegex)[0]);
		return age < 2 ? `${age} year` : `${age} years`;
	}

	private ageGroupInMonths(originalAge: string): string {
		const numRegex = /(\d{1,2})/i;
		const age = Number(originalAge.match(numRegex)[0]);
		let ageGroup = '';

		if (age >= 1 && age <= 3) {
			ageGroup = '0 0-3 months';
		} else if (age > 3 && age <= 6) {
			ageGroup = '0 3-6 months';
		} else if (age > 6 && age <= 11) {
			ageGroup = '0 6-11 months';
		}

		return ageGroup;
	}

	private ageGroupInWeeks(originalAge: string): string{
		const numRegex = /(\d{1,2})/i;
		const age = Number(originalAge.match(numRegex)[0]);
		let ageGroup = '';

		if (age >= 1 && age <= 12) {
			ageGroup = '0 0-3 months';
		} else if (age >= 13 && age <= 24) {
			ageGroup = '0 3-6 months';
		} else {
			ageGroup = `${age} weeks`;
		}

		return ageGroup;
	}

	private createAgeGroupFilterLookup(age: string, ageGroup: string): void {
		if (this.animalAgeGroups.get(ageGroup)) {
			this.animalAgeGroups.get(ageGroup).add(age);
		} else {
			this.animalAgeGroups.set(ageGroup, new Set([age]));
		}
	}
}
