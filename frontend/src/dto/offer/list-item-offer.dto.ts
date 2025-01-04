import { HousingType } from '../../../../src/shared/types/index.js';
import { UserDto } from '../user/user.dto.js';


export class ListItemOfferDto {
  public id!: string;

  public name!: string;

  public publicationDate!: string;

  public cityName!: string;

  public preview!: string;

  public premium!: boolean;

  public favoritesFlag!: boolean;

  public rating!: number;

  public housingType!: HousingType;

  public rentCost!: number;

  public user!: UserDto;

  public commentsCount!: number;
}
