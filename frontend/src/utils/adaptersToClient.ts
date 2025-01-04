import { Comment, ListOffer, Offer, Type, User } from '../types/types';
import { HousingType, UserType } from '../dto/backend-types';
import { ListItemOfferDto } from '../dto/offer/list-item-offer.dto';
import { CityLocation, TYPES } from '../const';
import { UserDto } from '../dto/user/user.dto';
import { FetchFullOfferDto } from '../dto/offer/fetch-full-offer.dto';
import { FetchCommentDto } from '../dto/comment/fetch-comment.dto';

export const adaptUserToClient =
  (user: UserDto): User => ({
    name: user.userName,
    email: user.email,
    avatarUrl: user.avatarPath,
    isPro: user.userType === UserType.Pro,
  });


export const adaptHousingType = (type: HousingType): Type => {
  switch (type){
    case HousingType.Apartment:
      return TYPES[0];
    case HousingType.Room:
      return TYPES[1];
    case HousingType.House:
      return TYPES[2];
    case HousingType.Hotel:
      return TYPES[3];
  }
};

export const adaptListOfferToClient = (offer: ListItemOfferDto): ListOffer => ({
  id: offer.id,
  price: offer.rentCost,
  rating: offer.rating,
  title: offer.name,
  isPremium: offer.premium,
  isFavorite: offer.favoritesFlag,
  city: {
    name: offer.cityName,
    location: CityLocation[offer.cityName]
  },
  location: CityLocation[offer.cityName],
  previewImage: offer.preview,
  type: adaptHousingType(offer.housingType),
});

export const adaptListOffersToClient = (offers: ListItemOfferDto[]): ListOffer[] =>
  offers.map((offer) => adaptListOfferToClient(offer));


export const adaptFullOfferToClient = (offer: FetchFullOfferDto): Offer => ({
  id: offer.id,
  price: offer.rentCost,
  rating: offer.rating,
  title: offer.name,
  isPremium: offer.premium,
  isFavorite: offer.favoritesFlag,
  city: {
    name: offer.cityName,
    location: CityLocation[offer.cityName]
  },
  location: {latitude: offer.latitude, longitude: offer.longitude},
  previewImage: offer.preview,
  type: adaptHousingType(offer.housingType),
  host: adaptUserToClient(offer.user),
  bedrooms: offer.roomsCount,
  description: offer.description,
  images: offer.photos,
  maxAdults: offer.guestsCount,
  goods: offer.facilities
});

export const adaptCommentToClient = (comment: FetchCommentDto) : Comment => ({
  comment: comment.text,
  rating: comment.rating,
  date: comment.publicationDate,
  id: comment.id,
  user: adaptUserToClient(comment.userId)
});

