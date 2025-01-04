import { TYPES } from '../const';
import { CityNames, Facilities, HousingType, UserType } from '../dto/backend-types';
import { CreateCommentDto } from '../dto/comment/create-comment.dto';
import { CreateOfferDto } from '../dto/offer/create-offer.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { CommentAuth, NewOffer, Type, UserRegister} from '../types/types';


export const adaptSignupToServer =
  (user: UserRegister): CreateUserDto => ({
    userName: user.name,
    email: user.email,
    avatarPath: ' ',
    userType: user.isPro ? UserType.Pro : UserType.Standart,
    password: user.password,
  });

export const adaptToHousingType = (type: Type): HousingType => {
  switch (type){
    case TYPES[0]:
      return HousingType.Apartment;
    case TYPES[1]:
      return HousingType.Room;
    case TYPES[2]:
      return HousingType.House;
    case TYPES[3]:
      return HousingType.Hotel;
  }
};

export const adaptAddOfferToServer = (offer: NewOffer): CreateOfferDto => ({
  name: offer.title,
  description: offer.description,
  publicationDate: new Date(),
  cityName: offer.city.name as CityNames,
  preview: offer.previewImage,
  photos: ['','', '', '', '', ''],
  premium: offer.isPremium,
  housingType: adaptToHousingType(offer.type),
  roomsCount: offer.bedrooms,
  guestsCount: offer.maxAdults,
  rentCost: offer.price,
  facilities: offer.goods.map((good) => good as Facilities)
});

export const adaptAddCommentToServer = (comment: CommentAuth) : CreateCommentDto => ({
  text: comment.comment,
  rating: comment.rating,
  offerId: comment.id
});
