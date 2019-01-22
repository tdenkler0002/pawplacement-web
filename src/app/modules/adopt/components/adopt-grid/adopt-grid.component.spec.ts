import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptGridComponent } from './adopt-grid.component';

describe('AdoptGridComponent', () => {
	let component: AdoptGridComponent;
	let fixture: ComponentFixture<AdoptGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AdoptGridComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AdoptGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
