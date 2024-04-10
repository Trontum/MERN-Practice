import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOffersComponent } from './book-offers.component';

describe('BookOffersComponent', () => {
  let component: BookOffersComponent;
  let fixture: ComponentFixture<BookOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookOffersComponent]
    });
    fixture = TestBed.createComponent(BookOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
