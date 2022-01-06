import { Module } from '@nestjs/common';
import { ProfileAdminService } from './profile-admin.service';
import { ProfileAdminController } from './profile-admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'User', schema:UserSchema,collection:'User'}
  ]),PassportModule,UsersModule,AuthModule],
  providers: [ProfileAdminService],
  controllers: [ProfileAdminController]
})
export class ProfileAdminModule {}
