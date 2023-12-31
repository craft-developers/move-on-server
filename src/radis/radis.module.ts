import { Module } from '@nestjs/common';
import { RadisService } from './radis.service';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  providers: [RadisService],
  imports: [
    RedisModule.forRoot({
      config: {
        url: 'redis://127.0.0.1:6379' /* `redis://${process.env.REDIS_PORT}:${process.env.REDIS_PORT}` */,
      },
    }),
  ],
  exports: [RadisService],
})
export class RadisModule {}
