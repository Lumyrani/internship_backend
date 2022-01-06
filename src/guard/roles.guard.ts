
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable() export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles',context.getHandler());
    
      // console.log("roles const", roles)
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userRoles = request.user.roles;
    return roles.some(role => {
      return userRoles.find(userRole => {
        return userRole === role;
      });
    });
  }
}