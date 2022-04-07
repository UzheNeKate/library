import { Component } from '@angular/core';
import { Book, IBook } from '../../mock-book-list';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: IBook[];

  constructor(public bookService: BooksService) {
    this.books = Book.concat(this.bookService.getNewBooks());
  }
}
