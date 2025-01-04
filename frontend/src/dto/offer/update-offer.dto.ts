import { CityNames, Facilities, HousingType } from '../../../../src/shared/types/index.js';

export class UpdateOfferDto {

  public name?: string;

  public description?: string;

  public publicationDate?: Date;

  public cityName?: CityNames;

  public preview?: string;

  public photos?: string[];

  public premium?: boolean;

  public housingType?: HousingType;

  public roomsCount?: number;

  public guestsCount?: number;

  public rentCost?: number;

  public facilities?: Facilities[];
}
