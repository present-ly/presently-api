import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserDao } from './models/user.dao';
import { UserModel } from './models/user.model';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController implements UserDao {
  constructor(private readonly userService: UserService) {}
  @Get(':userId')
  @UseGuards(AuthGuard('jwt'))
  async findUserById(@Param('userId') id: string): Promise<UserModel> {
    console.log('id is: ' + id);
    return await this.userService.findUserById(id);
  }
  @Get('email/:email')
  findUserByEmail(@Param('email') id: string): Promise<UserModel> {
    return undefined;
  }
  @ApiBearerAuth()
  @Post()
  updateUserById(@Body() user) {}

  @ApiBearerAuth()
  @Delete(':userId')
  deleteUserById(id: string) {}
}
