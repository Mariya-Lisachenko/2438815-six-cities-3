import { UserType } from '../backend-types';

export class UserDto {
  public id!: string;

  public email!: string;

  public avatarPath!: string;

  public userName!: string;

  public userType!: UserType;
}
