import { Component, OnInit } from '@angular/core';
import {BooksService} from "../services/books.service";
import {IBook} from "../../mock-book-list";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: IBook = {
    id:0,
    name:'',
    author:''
  };

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.book = this.bookService.getInfo()
  }

}
