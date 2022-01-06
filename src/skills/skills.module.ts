import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from 'src/schemas/skills.schema';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Skills', schema: SkillSchema, collection:'Skills'}
  ]),AuthModule, PassportModule],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
