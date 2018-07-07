/*****************************
 *  Package imports
******************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*****************************
 *  Modules
******************************/

import { AppRoutingModule } from './app-routing.module';

/*****************************
 *  Components
******************************/

import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent, HomeLinksComponent,
	NewsComponent, NewsItemComponent
} from './components/index';

/*****************************
 *  Third-Party
******************************/

import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		HomeLinksComponent,
		NewsComponent,
		NewsItemComponent
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
