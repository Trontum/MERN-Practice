import { Component } from '@angular/core';
import { Book } from '../models/books.model';
import { ActivatedRoute } from '@angular/router';
import Books from '../../assets/books.json';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book!:Book|undefined;
  constructor(private router:ActivatedRoute){}
  ngOnInit(){
    this.router.params.subscribe(param=>{
      this.book=Books.find((element:any)=>element.title===param['title'])
    })
  }
}
