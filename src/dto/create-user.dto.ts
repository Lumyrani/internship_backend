import { IsEmail, IsString, MinLength, MaxLength, Validate } from 'class-validator'
import { CustomRolesType } from 'src/model/custom';
import { roles} from 'src/model/roles-model';
import { Roles } from 'src/roles.decorator';
export class CreateUserDto {
  readonly fullName: string;
  @IsEmail()
  readonly email: string;
  readonly userMobile: string;
  @IsString()
  @MinLength(4, { message: "password is too short" })
  @MaxLength(10, { message: "password is too long" })
  password: string;
  // @Validate(CustomRolesType,{ each: true})
 readonly roles: string;
  // @Validate(Roles,{ each: true})
  readonly collegeName: String;
}
