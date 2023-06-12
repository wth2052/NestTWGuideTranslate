import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {

	constructor() {
		console.log(`Storage: ${Math.random()}`);
	}

	private list: any[] = [];

	public getItems(): any[] {
		return this.list;
	}

	public addItem(item: any): void {
		this.list.push(item);
	}

}