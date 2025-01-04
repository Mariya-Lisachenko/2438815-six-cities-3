import { UserDto } from '../user/user.dto';

export class FetchCommentDto {
  public id!: string;

  public text!: string;

  public rating!: number;

  public publicationDate!: string;

  public userId!: UserDto;
}
