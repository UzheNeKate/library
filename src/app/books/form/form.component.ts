import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import {Book, IBook} from "../../mock-book-list";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(public bookService: BooksService) {
    this.bookForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      author: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    let newBook: IBook = {
      id:  Book.length+this.bookService.getNewBooks().length+1,
      name: this.bookForm.value.name,
      author: this.bookForm.value.author
    };

    this.bookService.setNewBooks(newBook)
    this.bookForm.reset()
  }
}
