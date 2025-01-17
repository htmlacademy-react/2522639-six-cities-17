import cn from 'classnames';
import { Path, TypesPage } from '../../../constants';
import Mark from '../mark/mark';
import Rating from '../rating/rating';
import { ImageSize } from './setting';
import BookmarkBtn from '../bookmark-btn/bookmark-btn';
import { generatePath, Link } from 'react-router-dom';
import {
  OnCardChangeType,
  ShortOfferType,
  TypesPageEnum,
} from '../../../types/alltypes';

type CardProps = {
  typesPage: TypesPageEnum;
  offer: ShortOfferType;
  onCardChange?: OnCardChangeType;
};

type CardImageProps = {
  id: string;
  src: string;
  title: string;
  typesPage: TypesPageEnum;
};

function CardImage(props: CardImageProps): JSX.Element {
  const { id, src, title, typesPage } = props;
  const wrapperClasses = cn('place-card__image-wrapper', {
    ['cities__image-wrapper']: typesPage === TypesPage.Main,
    ['near-places__image-wrapper']: typesPage === TypesPage.Offer,
    ['favorites__image-wrapper']: typesPage === TypesPage.Favorites,
  });

  return (
    <div className={wrapperClasses}>
      <Link to={generatePath(Path.Offer, { offerId: id })}>
        <img
          className="place-card__image"
          src={src}
          width={
            typesPage === TypesPage.Favorites
              ? ImageSize.Favorites.Width
              : ImageSize.Default.Width
          }
          height={
            typesPage === TypesPage.Favorites
              ? ImageSize.Favorites.Height
              : ImageSize.Default.Height
          }
          alt={title}
        />
      </Link>
    </div>
  );
}

function Card({ offer, onCardChange, typesPage }: CardProps): JSX.Element {
  const {
    id,
    isPremium,
    previewImage,
    title,
    price,
    rating,
    type,
    isFavorite,
  } = offer;
  const articleClasses = cn('place-card', {
    ['cities__card']: typesPage === TypesPage.Main,
    ['near-places__card']: typesPage === TypesPage.Offer,
    ['favorites__card']: typesPage === TypesPage.Favorites,
  });

  return (
    <article
      onMouseEnter={() => onCardChange && onCardChange(id)}
      onMouseLeave={() => onCardChange && onCardChange(null)}
      className={articleClasses}
    >
      {isPremium && <Mark isCard />}
      <CardImage
        id={id}
        src={previewImage}
        title={title}
        typesPage={typesPage}
      />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkBtn typesPage={typesPage} isCard isActive={isFavorite} />
        </div>
        <Rating rating={rating} isCard />
        <h2 className="place-card__name">
          <Link to={generatePath(Path.Offer, { offerId: id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
