import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Public } from 'src/auth/public';

@Controller('roles')
export class RolesController {
    constructor(private _rolesService: RolesService) { }
    @Get()
    @Public()
    getRoles() {
        return this._rolesService.getRoles()
    }
}
