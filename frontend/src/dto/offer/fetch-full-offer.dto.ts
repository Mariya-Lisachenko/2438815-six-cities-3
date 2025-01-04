import { Facilities, HousingType } from '../../../../src/shared/types/index.js';
import { UserDto } from '../user/user.dto.js';


export class FetchFullOfferDto {
  public id!: string;

  public name!: string;

  public description!: string;

  public publicationDate!: string;

  public cityName!: string;

  public preview!: string;

  public photos!: string[];

  public premium!: boolean;

  public favoritesFlag!: boolean;

  public rating!: number;

  public housingType!: HousingType;

  public roomsCount!: number;

  public guestsCount!: number;

  public rentCost!: number;

  public facilities!: Facilities[];

  public user!: UserDto;

  public commentsCount!: number;

  public latitude!: number;

  public longitude!: number;
}
