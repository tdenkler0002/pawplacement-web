import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavbarComponent, HomeLinksComponent, NewsComponent, NewsItemComponent } from '../index';
import { OwlModule } from 'ngx-owl-carousel';
import { HttpClient, HttpHandler } from '@angular/common/http';

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
				NewsItemComponent
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
