import { Controller, Get, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard())
export class SkillsController {
    constructor(private _technicalService: SkillsService) { }
    @Get('skill')
    getSkills() {
        return this._technicalService.getSkills()
    }

}
