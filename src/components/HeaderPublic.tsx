import { Flex, Button } from '@chakra-ui/react';

function HeaderPublic() {
  return (
    <Flex width={{ base: '100%' }} bg='brightTurquoise' minHeight={{ base: '70px' }}>
      <Flex
        justifyContent={{ base: 'space-between' }}
        maxWidth={{ base: '1440px' }}
        marginX={{ base: 'auto' }}
        width={{ base: '100%' }}
      >
        <Flex>
          <Button colorScheme='teal' variant='link'>
            Link 1
          </Button>
          <Button colorScheme='teal' variant='link'>
            Link 1
          </Button>
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
