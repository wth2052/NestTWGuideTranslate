import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import {AuthGuard} from '../../guards/auth/auth.guard';
import {RoleGuard} from '../../guards/role/role.guard';
export const Auth = (...roles: string[]) => applyDecorators(
	Roles(...roles),
	UseGuards(AuthGuard, RoleGuard)
);