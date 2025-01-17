import CardsList from '../../../components/blocks/cards-list/cards-list';
import LocationsItemLink from '../../../components/blocks/locations-item-link/locations-item-link';
import {
  CityType,
  CurrentCityChangeType,
  ShortOfferListType,
  TypesPageEnum,
} from '../../../types/alltypes';

type FavoritesItemProps = {
  typesPage: TypesPageEnum;
  offers: ShortOfferListType;
  city: CityType;
  onCurrentCityChange: CurrentCityChangeType;
};

function FavoritesItem(props: FavoritesItemProps): JSX.Element {
  const { city, offers, typesPage, onCurrentCityChange } = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div
          onClick={() => onCurrentCityChange(city)}
          className="locations__item"
        >
          <LocationsItemLink city={city} typesPage={typesPage} />
        </div>
      </div>
      <CardsList offers={offers} typesPage={typesPage} />
    </li>
  );
}

export { FavoritesItem };
