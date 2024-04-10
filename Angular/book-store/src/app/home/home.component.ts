import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <input type="text" [(ngModel)]="city" /> {{city}}
    <section [ngSwitch]="city" >
    <span *ngSwitchCase="'Hyderabad'">Delivery by 5pm today</span>
    <span *ngSwitchCase="'Mumbai'">Delivery by 10am tomorrow</span>
    <span *ngSwitchCase="'Bangalore'">Delivery by 9pm 7th April</span>
    <span *ngSwitchDefault>Service unavailable in your city</span>
    </section>
    <app-carousel *ngIf=!isLoggedIn; else elseBlock [imageList]="imageList" [title]="title"></app-carousel>
    <ng-template #elseBlock><h3>Welcome to Manga Store</h3></ng-template>
    <app-carousel [imageList]="images" [title]="secondTitle"></app-carousel>
  `,
  styles: [
  ]
})
export class HomeComponent {
  title='Manga Sale'
  secondTitle='Trending in 2024'
  isLoggedIn=true
  city="Hyderabad"
    images=[
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/202127_jpg.jpg', description: 'Person using smartphone' },
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/2616358_jpg.jpg', description: 'Light Trails' },
     
    ]
    // title='Manga Sale';
    imageList = [
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/485206637_jpg.jpg', description: 'Engineers with low pressure steam turbines  - 50% discount' },
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/1273505783_jpg.jpg', description: 'Ophthalmologist analyzing  - 20% discount' },
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/906870684_jpg.jpg', description: 'Aircraft mechanic in the hangar  - Flat Rs.100 OFF' },
      { image: 'https://ts.accenture.com/sites/BrandSpace/Photographic%20Images/_w/1205964283_jpg.jpg', description: 'digital tablet with smart home control functions  - 50% discount' }
    ]
}
