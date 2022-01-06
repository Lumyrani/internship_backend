import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { roles } from "src/model/roles-model";

export class RolesValidationPipe implements PipeTransform {
    readonly allowedRoles = [
        roles.Candidate,
        roles.Company,
        roles.Institution,
        roles.Interviewer,
        roles.Questions_Author
    ]
    transform(value: any) {
        console.log("value", value)
        value = value.toUpperCase()

        if (!this.isRolesValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid role `)
        }
        return value;
    }

    private isRolesValid(status: any) {
        const idx = this.allowedRoles.indexOf(status)
        return idx !== -1
    }
}

