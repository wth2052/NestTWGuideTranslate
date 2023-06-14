import { Controller, Get, Inject } from '@nestjs/common';
import { ContextIdFactory, ModuleRef, REQUEST } from '@nestjs/core';

import { Request } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly moduleRef: ModuleRef,
    @Inject(REQUEST) private readonly request: Request
  ) {}

  @Get()
  async getTruth() {
    const identifier = ContextIdFactory.getByRequest(this.request);
    const [instance1, instance2] = await Promise.all([
      this.moduleRef.resolve(AppService, identifier),
      this.moduleRef.resolve(AppService, identifier)
    ]);

    return instance1 === instance2;
  }

}