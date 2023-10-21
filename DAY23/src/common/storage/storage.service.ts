import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {

	private list: any[] = [];

	public addData(data: any): void {
		this.list.push(data);
	}

	public getList(): any[] {
		return this.list;
	}

}