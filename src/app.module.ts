import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'docker/local/.env',
      isGlobal: true,
    }),
    UserModule,
  MongooseModule.forRoot(process.env.MONGO_URI || ''),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
