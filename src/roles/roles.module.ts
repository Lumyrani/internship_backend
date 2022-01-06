import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RolesSchema } from '../schemas/roles.schema'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Roles', schema: RolesSchema, collection: 'Roles' }
  ])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule { }
