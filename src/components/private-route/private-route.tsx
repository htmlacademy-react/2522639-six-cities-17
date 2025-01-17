import { Navigate } from 'react-router-dom';
import { PathEnum } from '../../types/alltypes';

type PrivateRouteProps = {
  toPath: PathEnum;
  isLoggedIn: boolean;
  children: JSX.Element;
};

function PrivateRoute({
  isLoggedIn,
  children,
  toPath,
}: PrivateRouteProps): JSX.Element {
  return isLoggedIn ? children : <Navigate to={toPath} />;
}

export { PrivateRoute };
