import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

function RequireAuth({ children }: { children: JSX.Element }) {
  let { stateAuth } = useAuth();
  const { user } = stateAuth;
  let location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
