import {UserType} from '../backend-types';

export class CreateUserDto {
  public userName!: string;

  public email!: string;

  public avatarPath!: string;

  public userType!: UserType;

  public password!: string;
}
