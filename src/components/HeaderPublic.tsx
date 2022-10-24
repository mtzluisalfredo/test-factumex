import { AtSignIcon, AttachmentIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/auth';
import LinkPage from './LinkPage';

function HeaderPublic({ visible }: any) {
  const { signout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (!visible) {
    return null;
  }

  return (
    <Flex
      width={{ base: '100%' }}
      paddingX={{ base: '24px', xl: 0 }}
      bg='deepCerulean'
      color='white'
      minHeight={{ base: '70px' }}
    >
      <Flex
        justifyContent={{ base: 'space-between' }}
        maxWidth={{ base: '1440px' }}
        marginX={{ base: 'auto' }}
        width={{ base: '100%' }}
      >
        <Flex alignItems={{ base: 'center' }}>
          <LinkPage marginRight={{ base: '40px' }} to='/employees'>
            <AtSignIcon marginRight={{ base: '4px' }} />
            Employees
          </LinkPage>
          <AttachmentIcon marginRight={{ base: '4px' }} />
          <LinkPage to='/upload'>Upload</LinkPage>
        </Flex>
        <Flex>
          <Button
            color='white'
            onClick={() => {
              signout(() => {
                navigate(from, { replace: true });
              });
            }}
            variant='link'
          >
            <CloseIcon marginRight={{ base: '4px' }} />
            Cerrar sesión
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HeaderPublic;
