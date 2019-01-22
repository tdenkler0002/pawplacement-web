import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinksComponent } from './home-links.component';
import { OwlModule } from 'ngx-owl-carousel';

describe('HomeLinksComponent', () => {
	let component: HomeLinksComponent;
	let fixture: ComponentFixture<HomeLinksComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ OwlModule ],
			declarations: [ HomeLinksComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeLinksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
