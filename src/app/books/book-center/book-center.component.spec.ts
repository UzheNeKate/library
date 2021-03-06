import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCenterComponent } from './book-center.component';

describe('BookCenterComponent', () => {
  let component: BookCenterComponent;
  let fixture: ComponentFixture<BookCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
