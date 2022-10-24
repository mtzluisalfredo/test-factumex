import { chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkPage = chakra(Link, {
  baseStyle: {
    fontWeight: 'bold',
  },
});

export default LinkPage;
