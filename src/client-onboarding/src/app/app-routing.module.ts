import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
}, {
  path: 'index',
  component: IndexComponent,
  children: [
    {
      path: '',
      component: DetailsComponent
    }, {
      path: 'address',
      component: AddressComponent
    }, {
      path: 'review',
      component: ReviewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
