import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../users/user.inteface'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }
    async getUserById(userId: string): Promise<any> {
        const user = await this.userModel.findById(userId)
        if (!user) {
            throw new NotFoundException('could not find the user')
        }
        return { result: user }
    }

    async updateUserById(req) {
        const user = await this.userModel.findById(req.params.id)
        if (!user) {
            throw new NotFoundException('could not find the user')
        }
        else {
            user.fullName = req.body.fullName,
                user.email = req.body.email,
                user.college = req.body.college,
                user.institute= req.body.institute,
                user.userMobile = req.body.userMobile,
                user.dateOfBirth = req.body.dob,
                user.hometown = req.body.hometown,
                user.martialStatus = req.body.martialStatus,
                user.address = req.body.address
            return await user.save()
        }
    }

    async updateEducation(req) {
        const user = await this.userModel.findById(req.params.id)
        if (!user) {
            throw new NotFoundException('could not find the user')
        }
        else {
            user.college = req.body.college,
            user.institute= req.body.institute,
                user.department = req.body.department,
                user.state = req.body.state,
                user.degree = req.body.degree,
                user.board = req.body.boardName,
                user.percentage = req.body.percentage
            return await user.save()
        }
    }
    async updateTech(req) {
        const user = await this.userModel.findById(req.params.id)
        if (!user) {
            throw new NotFoundException('could not find user')
        }
        else {
            user.companyName = req.body.companyName,
            user.institute= req.body.institute,
            user.college=req.body.college,
                user.skill_id = req.body.skill
            return await user.save()
        }
    }
    async updateRoles(req) {
        const user = await this.userModel.findById(req.params.id)
        if (!user) {
            throw new NotFoundException('could not find user ')
        }
        else {
            user.roles.push(req.body.roles)
            return await user.save()
        }
    }

}

