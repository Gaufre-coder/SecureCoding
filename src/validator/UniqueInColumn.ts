import { registerDecorator ,ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions } from 'class-validator'
import { User } from '../entities/User'
import { DataSource } from "typeorm"

@ValidatorConstraint({ async: true })
export class UniqueInColumnConstraint implements ValidatorConstraintInterface {
    
    private repo: string

    constructor(mail: string,repo: string) {
        this.repo = repo
    }

    validate(mail: string, args: ValidationArguments) {

        const entity = args.object as Required<DataSource>

        const result = entity
            .getRepository(User)
            .createQueryBuilder()
            .select("*")
            .from(User, "user")
            .where("user.email = :email", {email: mail})
            .getCount()
        
        return result.then((number: number) => {
            if (number > 0) {
                return true;
            }
            else return false;
        })
    
    }
}

export function UniqueInColumn(validationOptions?: ValidationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueInColumnConstraint,
        })
    }
}