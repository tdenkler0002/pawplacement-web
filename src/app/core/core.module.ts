/********************************
* Package and class imports
*******************************/

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

/********************************
* Modules
*******************************/
/********************************
* App Components
*******************************/
/********************************
* Classes, interfaces, directives, pipes
*******************************/
/********************************
* Services
*******************************/

import { EventService, NewsService, ClonerService } from './services/index';

/********************************
* Third-party
*******************************/
/********************************
* Declaration
*******************************/


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ ],
	exports: [ ],
	providers: [
		EventService,
		ClonerService,
		NewsService
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	// static forRoot(): ModuleWithProviders {
	// 	return {
	// 		ngModule: CoreModule,
	// 		providers: [
	// 			{ provide: }
	// 		]
	// 	};
	// }
}
