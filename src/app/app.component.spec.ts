import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent, HomeLinksComponent, NewsComponent, NewsItemComponent } from './components/index';
import { OwlModule } from 'ngx-owl-carousel';

describe('AppComponent', () => {

	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(fakeAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				OwlModule,
				RouterTestingModule
			],
			declarations: [
				AppComponent,
				HomeComponent,
				NavbarComponent,
				HomeLinksComponent,
				NewsComponent,
				NewsItemComponent
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', fakeAsync(() => {

		expect(component).toBeTruthy();
	}));

	it(`should have 'Paw Placement' as title`, fakeAsync(() => {

		expect(component.title).toEqual('Paw Placement');
	}));

	// it('should render title in a h1 tag', async(() => {
	//   const fixture = TestBed.createComponent(AppComponent);
	//   fixture.detectChanges();
	//   const compiled = fixture.debugElement.nativeElement;
	//   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
	// }));
});
