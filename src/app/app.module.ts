/*****************************
 *  Package imports
******************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*****************************
 *  Modules
******************************/

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

/*****************************
 *  Components
******************************/

import { AppComponent } from './app.component';
import {
	HomeComponent, NavbarComponent, HomeLinksComponent,
	NewsComponent, NewsItemComponent, NewsCreateComponent,
	NewsEditComponent
} from './components/index';

/*****************************
 *  Third-Party
******************************/

import { OwlModule } from 'ngx-owl-carousel';

/*****************************
 *  Routes
******************************/

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		HomeLinksComponent,
		NewsComponent,
		NewsItemComponent,
		NewsCreateComponent,
		NewsEditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		OwlModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
