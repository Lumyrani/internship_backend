import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Public } from 'src/auth/public';
import { RolesValidationPipe } from 'src/pipes/roles-validation.pipe';

@Controller()
export class UsersController {
    constructor(private _userService: UsersService) { } @Post('register')
    @Public()
    @UsePipes(ValidationPipe)
    async create(@Body() createUserDto: CreateUserDto) {
        console.log("usercontrol", createUserDto)
        return await this._userService.create(createUserDto)
    }
}