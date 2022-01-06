import { Module, NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsSchema } from '../schemas/questions.schema';
import { AuthModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Questions', schema: QuestionsSchema, collection: 'Questions' }
  ]), AuthModule,PassportModule],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}

