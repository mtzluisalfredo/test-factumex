import type { FlexProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { omit } from 'lodash';
import HeaderPublic from './HeaderPublic';
import { useAuth } from '../contexts/auth';

type Props = FlexProps & {
  children?: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = (props) => {
  let { stateAuth } = useAuth();
  const { user } = stateAuth;

  const { children } = props;
  const styleProps = omit(props, ['children']);

  return (
    <Flex
      alignItems={{ base: 'dfdsf' }}
      direction='column'
      minHeight='800px'
      height='100vh'
      {...styleProps}
    >
      <HeaderPublic visible={user} />

      <Flex
        marginX='auto'
        minHeight='800px'
        height='100vh'
        width={{ base: '100%' }}
        maxWidth={{ base: '1440px' }}
        paddingX={{ base: '24px', xl: 0 }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
