
// Main Page
import { useEffect, useState } from 'react';
import { fetchOffers } from '../../lib/api';
import OfferCard from '../../components/cards/offer-card';
import { Offer } from '../../types/offer';
import Header from '../../components/blocks/header';

type MainPageProps = {
  maxCards: number;
};

function MainPage({ maxCards }: MainPageProps): JSX.Element {
  const [displayedOffers, setDisplayedOffers] = useState<Offer[]>([]);

  useEffect(() => {
    async function loadOffers() {
      const data = await fetchOffers();
      // Выводим случайные предложения и ограничиваем их количество по заданному в index.tsx
      const randomOffers = data.sort(() => 0.5 - Math.random()).slice(0, maxCards);
      setDisplayedOffers(randomOffers);
    }

    loadOffers();
  }, [maxCards]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {displayedOffers.length} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {displayedOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    isPremium={offer.isPremium}
                    rating={offer.rating}
                    previewImage={offer.previewImage}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainPage;
