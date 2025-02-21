import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  public client: PrismaClient
  constructor() {
    this.client = new PrismaClient()
  }

  onModuleInit() {
    return this.client.$connect()
  }

  onModuleDestroy() {
    return this.client.$disconnect()
  }
}
