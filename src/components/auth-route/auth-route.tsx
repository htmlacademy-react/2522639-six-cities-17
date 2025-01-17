import {Navigate} from 'react-router-dom';

type AuthRouteProps = {
  children: JSX.Element;
}

export default function AuthRoute({children}: AuthRouteProps): JSX.Element{
  const isLogged: boolean = true;
  return (
    isLogged ? children : <Navigate to={'/login'}/>
  );
}
