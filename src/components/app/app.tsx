// src/ components / app / app
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import AuthRoute from '../auth-route/auth-route';
import { RoutePath } from '../../lib/routes.ts';


type AppProps = {
  maxCards: number;
};

function App({ maxCards }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainPage maxCards={maxCards} />} />
          <Route
            path={RoutePath.LOGIN}
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path={RoutePath.FAVORITES}
            element={
              <AuthRoute>
                <FavoritesPage />
              </AuthRoute>
            }
          />
          <Route
            path={RoutePath.OFFER}
            element={<OfferPage />}
          />
          <Route
            path={RoutePath.NOT_FOUND}
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
