import { Module } from '@nestjs/common';

const HANDSOME_WOO = {
	provide: 'HANDSOME_MAN',
	useValue: {
		name: 'WOO'
	}
};

@Module({
	providers: [
		HANDSOME_WOO
	],
	exports: [
		HANDSOME_WOO
	]
})
export class HandsomeModule {}