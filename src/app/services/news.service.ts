/*****************************
 *  Package imports
******************************/

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

/*****************************
 *  Components
******************************/

/*****************************
 *  Classes / pipes / enums
******************************/

import { INewsArticle } from '../interfaces';

/*****************************
 *  Third-Party
******************************/


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(private http: HttpClient) { }

	getNews(): Observable<any> {
		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.mapNews),
			catchError(this.handleError)
		);
	}

	// TODO: Write mapping
	getNewsItem(id: string): Observable<any> {
		const url = `${apiUrl}/${id}`;

		return this.http.get(url, httpOptions).pipe(
			map(this.mapNews),
			catchError(this.handleError)
		);
	}

	postNews(data): Observable<any> {
		return this.http.post(apiUrl, data, httpOptions).pipe(
			catchError(this.handleError)
		);
	}

	updateNews(data): Observable<any> {
		return this.http.put(apiUrl, data, httpOptions).pipe(
			catchError(this.handleError)
		);
	}

	deleteNews(id: string): Observable<any> {
		const url = `${apiUrl}/${id}`;

		return this.http.delete(url, httpOptions).pipe(
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

	private mapNews(res: any): Array<INewsArticle> {
		const newsArticles: Array<INewsArticle> = [];

		for (const news of res) {
			const newsArticle: INewsArticle = {
				id: news._id,
				articleUuid: news.article_uuid,
				articleDate: news.article_date,
				articleTitle: news.article_title,
				articleContent: news.article_content
			};

			newsArticles.push(newsArticle);
		}

		debugger;

		return newsArticles;
	}
}
