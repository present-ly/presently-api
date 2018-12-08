import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { FriendModule } from './friend/friend.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // tslint:disable-next-line:max-line-length
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    FriendModule,
    MongooseModule.forRoot(
      'mongodb://present-ly:G1ft1ngR3v@cluster0-shard-00-00-pipdr.gcp.mongodb.net:27017,cluster0-shard-00-01-pipdr.gcp.mongodb.net:27017,cluster0-shard-00-02-pipdr.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
