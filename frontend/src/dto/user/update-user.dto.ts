import {UserType} from '../backend-types';

export class UpdateUserDto {
  public email?: string;

  public username?: string;

  public avatarPath?: string;

  public password?: string;

  public userType?: UserType;
}
