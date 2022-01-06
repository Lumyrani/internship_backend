import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';
import { QuestionsModule } from './questions/questions.module';
import { RolesModule } from './roles/roles.module';
import { ProfileAdminModule } from './profile-admin/profile-admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/freegodb', { useNewUrlParser: true, useCreateIndex: true }),
    UsersModule, ProfileModule, SkillsModule, QuestionsModule, RolesModule, ProfileAdminModule, AuthModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
