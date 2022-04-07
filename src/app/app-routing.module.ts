import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookCenterComponent} from "./books/book-center/book-center.component";
import {BookDetailsComponent} from "./books/book-details/book-details.component";
import {FormComponent} from "./books/form/form.component";

const routes: Routes = [
  { path: '', component: BookCenterComponent},
  { path: 'info', component: BookDetailsComponent},
  { path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
