import { Controller, UseGuards, Get, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { QuestionsService } from './questions.service';
import { Roles } from 'src/roles.decorator';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('question')
// @UseGuards(AuthGuard())
export class QuestionsController {
    constructor(private _questionsService: QuestionsService) { }
    @Get(':id')
    getQuestionsBySkillId(@Req() req) {
        return this._questionsService.getQuestionsBySkillId(req.params.id)
    }
    // add questions by skill
    @Post(':id')
    postQuestion(@Req() req) {
        return this._questionsService.postQuestion(req)
    }
}