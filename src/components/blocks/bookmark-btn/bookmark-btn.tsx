import cn from 'classnames';
import { TypesPage } from '../../../constants';
import { SvgSize } from './settings';
import { TypesPageEnum } from '../../../types/alltypes';

type BookmarkBtnProps = {
  typesPage: TypesPageEnum;
  isActive?: boolean;
  isCard?: boolean;
};

function BookmarkBtn({
  typesPage,
  isActive,
  isCard,
}: BookmarkBtnProps): JSX.Element {
  const buttonClasses = cn('button', {
    ['place-card__bookmark-button--active']: isActive,
    ['place-card__bookmark-button']: isCard,
    ['offer__bookmark-button']: !isCard && typesPage === TypesPage.Offer,
  });
  const svgClasses = cn({
    ['place-card__bookmark-icon']: isCard,
    ['offer__bookmark-icon']: !isCard && typesPage === TypesPage.Offer,
  });
  const width = isCard ? SvgSize.Card.Width : SvgSize.OffCard.Width;
  const height = isCard ? SvgSize.Card.Height : SvgSize.OffCard.Height;
  const text = isActive ? 'In' : 'To';
  return (
    <button className={buttonClasses} type="button">
      <svg className={svgClasses} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${text} bookmarks`}</span>
    </button>
  );
}

export default BookmarkBtn;
