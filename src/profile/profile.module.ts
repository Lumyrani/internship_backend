import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { UserSchema } from 'src/schemas/user.schema';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'User', schema: UserSchema }
  ]), UsersModule,AuthModule,PassportModule],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
