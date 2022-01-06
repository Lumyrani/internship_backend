import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './user.inteface'
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto) {
        console.log("createUserDto",createUserDto.roles)
        let createdUser = new this.userModel(createUserDto)
        return await createdUser.save()
    }

    async findOneByEmail(email): Model<User> {
        return await this.userModel.findOne({ email: email });
    }

}
