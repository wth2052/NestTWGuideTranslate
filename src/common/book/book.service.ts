import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class BookService {

	constructor(
		private readonly storage: StorageService
	) {
		console.log(`Book: ${Math.random()}`);
	}

	public getBooks(): any[] {
		return this.storage.getItems();
	}

	public addBook(book: any): void {
		this.storage.addItem(book);
	}

}