import { Module } from '@nestjs/common';

const HANDSOME_WOO = {
  provide: 'HANDSOME_MAN',
  useFactory: async () => {
    const getWOO = new Promise(resolve => {
      setTimeout(() => resolve({ name: 'WOO' }), 2000);
    });
    const WOO = await getWOO;
    return WOO;
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