import { Box } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import AuthStatus from './AuthStatus';

function Guard() {
  return (
    <Box bg='red'>
      <AuthStatus />

      <ul>
        <li>
          <Link to='/employees'>employees Page</Link>
        </li>
      </ul>

      <Outlet />
    </Box>
  );
}

export default Guard;
