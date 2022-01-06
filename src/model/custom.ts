import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

@ValidatorConstraint({ name: "customText", async: false })
export class CustomRolesType implements ValidatorConstraintInterface {

    validate(text:string[], args: ValidationArguments) {
        console.log("text", typeof(text))
        console.log("text", text[0])
        console.log("text", args.value[0])

        //return text.length > 1 && text.length < 10; // for async validations you must return a Promise<boolean> here

        if (text[0] === 'company' || text[0] === 'institute' || text[0] === 'candidate') {
            return true
        }

    }

    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return "Invalid role";
    }

}
