import { Controller, Get, Param, UseGuards, Post, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/roles.decorator';

@Controller()
// @UseGuards(AuthGuard())
export class ProfileController {
    constructor(private _profileService: ProfileService ,) { }
    @Get("profile/:id")
    getUserById(@Param('id') userId: string) {
        return this._profileService.getUserById(userId)
    }
    @Post("personal/:id")
    updateUserById(@Req() req) {
        return this._profileService.updateUserById(req)

    }
    @Post("educational/:id")
    // @Roles('employee')
    updateEdu(@Req() req) {
        return this._profileService.updateEducation(req)
    }

    @Post("technical/:id")
    updateTech(@Req() req) {
        return this._profileService.updateTech(req)
    }

    @Post("roles/:id")
    updateRoles(@Req() req) {
        console.log("roles",req)
        return this._profileService.updateRoles(req)
    }
   
}
