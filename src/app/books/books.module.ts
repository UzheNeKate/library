import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCenterComponent } from './book-center/book-center.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {RouterModule} from "@angular/router";
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BookCenterComponent,
    BookListComponent,
    BookDetailsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
