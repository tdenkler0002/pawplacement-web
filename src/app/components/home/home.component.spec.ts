/*****************************
 *  Package Imports
******************************/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

/*****************************
 *  Components
******************************/

import { HomeComponent } from './home.component';
import {
	NavbarComponent, HomeLinksComponent, NewsComponent,
	NewsItemComponent, MissionComponent, FooterComponent
} from '../index';

/*****************************
 *  Third-Party
******************************/
import { OwlModule } from 'ngx-owl-carousel';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				OwlModule
			],
			declarations: [
				HomeComponent,
				NavbarComponent,
				HomeLinksComponent,
				NewsComponent,
				NewsItemComponent,
				MissionComponent,
				FooterComponent
			],
			providers: [
				HttpClient,
				HttpHandler
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
