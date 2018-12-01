import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDao } from './models/user.dao';
import { UserModel } from './models/user.model';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController implements UserDao{
  @Get(':userId')
  getUserById(@Param('id') id): UserModel {
    return undefined;
  }

  @ApiBearerAuth()
  @Post()
  updateUserById(@Body() user) {
  }

  @ApiBearerAuth()
  @Delete(':userId')
  deleteUserById(id: string) {

  }

}
