import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from '../schemas/user.schema'
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'User', schema: UserSchema, collection:'users'}
  ]), PassportModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
