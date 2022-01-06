import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skills } from '../interface/skills.interface'

@Injectable()
export class SkillsService {
    constructor(@InjectModel('Skills') private skillModel: Model<Skills>) { }
    async getSkills(){
        const skills = this.skillModel.find()
        console.log("skills are",skills)
        return await skills
    }
}
