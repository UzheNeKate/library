import { Injectable } from '@angular/core';
import { IBook } from '../../mock-book-list';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private book: IBook = {
    id: 0,
    name: '',
    author: '',
  };
  private newBooks: IBook[] = [];

  constructor() {}

  setInfo(book: IBook): void {
    this.book = book;
  }
  setNewBooks(book: IBook): void {
    this.newBooks.push(book);
  }
  getInfo(): IBook {
    return <IBook>this.book;
  }
  getNewBooks(): IBook[] {
    return this.newBooks;
  }
}
