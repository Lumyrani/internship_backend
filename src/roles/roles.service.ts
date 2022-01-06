import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Roles } from 'src/model/roles-model';

import { Roles } from '../interface/roles.interface';
@Injectable()
export class RolesService {
    constructor(@InjectModel('Roles') private rolesModel: Model<Roles>) { }
    async getRoles() {
        const roles = this.rolesModel.find({})
       console.log("roles", roles)
        return await roles
    }
}
