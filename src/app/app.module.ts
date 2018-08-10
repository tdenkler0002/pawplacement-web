/*****************************
 *  Package imports
******************************/

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

/*****************************
 *  Modules
******************************/

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

/*****************************
 *  Components / Directives
******************************/

import { AppComponent } from './app.component';
import {
	HomeComponent, NavbarComponent, HomeLinksComponent,
	NewsComponent, NewsItemComponent, NewsCreateComponent,
	NewsEditComponent, FooterComponent, MissionComponent
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
		NewsEditComponent,
		FooterComponent,
		MissionComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,

		// Third-Party
		OwlModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
