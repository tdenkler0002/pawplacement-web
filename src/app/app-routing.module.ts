/*****************************
 *  Package imports
******************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*****************************
 *  Components
******************************/

import { HomeComponent, NewsComponent, NewsItemComponent,
	NewsCreateComponent, NewsEditComponent
} from './components';

import { AdoptComponent } from './modules/adopt/components/adopt/adopt.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent },
	{
		path: 'news',
		component: NewsComponent,
		data: {title: 'News List'}
	},
	{
		path: 'news-item/:id',
		component: NewsItemComponent,
		data: {title: 'News Details'}
	},
	{
		path: 'news-create',
		component: NewsCreateComponent,
		data: {title: 'Create News'}
	},
	{
		path: 'news-edit',
		component: NewsEditComponent,
		data: {title: 'Edit News'}
	},
	{
		path: 'adopt',
		component: AdoptComponent,
		data: {title: 'Adoption List'}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {	}
