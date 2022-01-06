import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.inteface';

@Injectable()
export class ProfileAdminService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }
    async getAllUsers() {
        const users = this.userModel.find({})
        return await users
    }
}
