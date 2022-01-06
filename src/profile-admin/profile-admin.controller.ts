import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfileAdminService } from './profile-admin.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from '../roles.decorator'
// import { AdminGuard } from '../guard/admin.guard'
@Controller('profile-admin')
export class ProfileAdminController {
    constructor(private _profileAdminService:ProfileAdminService){}
    @Get('/users')
    @Roles('admin')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    getAllUsers(){
     return this._profileAdminService.getAllUsers()
    }
}
