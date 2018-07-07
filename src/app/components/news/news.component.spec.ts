import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { NewsItemComponent } from '..';
import { OwlModule } from 'ngx-owl-carousel';

describe('NewsComponent', () => {
	let component: NewsComponent;
	let fixture: ComponentFixture<NewsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				OwlModule
			],
			declarations: [
				NewsComponent,
				NewsItemComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
