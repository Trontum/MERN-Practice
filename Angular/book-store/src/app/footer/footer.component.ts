import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      Copyright &copy; 2024. All rights reserved at Manga Store.
    </p>
  `,
  styles: [
    `
    p{
      color:purple;
      text-align:center;
      
    }
    `
  ]
})
export class FooterComponent {

}
