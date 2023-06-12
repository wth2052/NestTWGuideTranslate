import { Injectable } from '@nestjs/common';
import { BookService } from './common/book/book.service';
import { StorageService } from './common/storage/storage.service';

@Injectable()
export class AppService {

  constructor(
    private readonly bookService: BookService,
    private readonly storage: StorageService
  ) {
    console.log(`AppService: ${Math.random()}`);
  }

  public addBookToStorage(book: any): void {
    this.storage.addItem(book);
  }

  public addBookToBookStorage(book: any): void {
    this.bookService.addBook(book);
  }

  public getStorageList(): any[] {
    return this.storage.getItems();
  }

  public getBookList(): any[] {
    return this.bookService.getBooks();
  }

}