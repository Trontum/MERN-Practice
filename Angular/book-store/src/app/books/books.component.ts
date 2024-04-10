import { Component } from '@angular/core';
import { Book } from '../models/books.model';
import books from "../../assets/books.json";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookList:Book[];
  theme='light';
  fontColor="purple";
  constructor(){
    this.bookList=books
  }
}
