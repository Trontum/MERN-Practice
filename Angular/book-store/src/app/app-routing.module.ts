import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { OfferZoneComponent } from './offer-zone/offer-zone.component';
import { BookOffersComponent } from './book-offers/book-offers.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
  path:"home", component:HomeComponent
},{
  path:"books",component:BooksComponent
},{
  path:"book-details/:title",component:BookDetailsComponent
},{
  path:"offer-zone",component:OfferZoneComponent,
  children:[
    {
      path:"book-offer",component:BookOffersComponent
    },
    {
      path:"subscription",component:SubscriptionComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
