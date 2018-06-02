/*****************************
 *  Package imports
******************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


/*****************************
 *  Components
******************************/

import { HomeComponent } from './components';

const routes: Routes = [
    { path: '',  component: HomeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}