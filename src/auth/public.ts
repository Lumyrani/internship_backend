import { SetMetadata } from "@nestjs/common";

export const Public = (): ((target: object, key?:any, descriptior?:any)=> any)=> SetMetadata('isPublic', true);