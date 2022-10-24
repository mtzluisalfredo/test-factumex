import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function HeaderPublic({ visible }: any) {
  if (!visible) {
    return null;
  }

  return (
    <Flex
      width={{ base: '100%' }}
      paddingX={{ base: '24px', xl: 0 }}
      bg='brightTurquoise'
      minHeight={{ base: '70px' }}
    >
      <Flex
        justifyContent={{ base: 'space-between' }}
        maxWidth={{ base: '1440px' }}
        marginX={{ base: 'auto' }}
        width={{ base: '100%' }}
      >
        <Flex>
          <Link to='/employees'>employees Page</Link>
          <Link to='/upload'>Upload</Link>
        </Flex>
        <Flex>
          <Button colorScheme='teal' variant='link'>
            Link 1
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HeaderPublic;
