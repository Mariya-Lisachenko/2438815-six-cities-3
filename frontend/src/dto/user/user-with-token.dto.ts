import {UserType} from '../backend-types';

export class UserWithTokenDto {
  public token!: string;

  public email!: string;

  public avatarPath!: string;

  public userName!: string;

  public userType!: UserType;
}
