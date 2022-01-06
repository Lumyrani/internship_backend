import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Questions } from '../interface/questions.interface'
@Injectable()
export class QuestionsService {
    constructor(@InjectModel('Questions') private questionModel: Model<Questions>) { }
    async getQuestionsBySkillId(skillId: string): Promise<any> {
        const question = await this.questionModel.find({ skill_id: skillId })
        if (!question) {
            throw new NotFoundException('could not find the questions')
        }
        else {
            console.log("question array", question)
            return { response: question }
        }

    }

    async postQuestion(req): Promise<any> {
        let question = new this.questionModel()
            question.skill_id = req.params.id,
            question.question = req.body.question,
            question.option1 = req.body.option1,
            question.option2 = req.body.option2,
            question.option3 = req.body.option3,
            question.answer = req.body.answer
            return await question.save()
    }
}
