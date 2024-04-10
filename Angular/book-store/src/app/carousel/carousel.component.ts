import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() imageList:any=[];
  @Input() title="";

  index=0;
  prev(){
    if(this.index>0){
      this.index-=1;
    }
    else{
      this.index=this.imageList.length-1;
    }
  }
  next(){
    if(this.index<this.imageList.length-1){
      this.index+=1;
    }
    else{
      this.index=0;
    }
  }
}
