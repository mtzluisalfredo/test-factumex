import type { FlexProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { omit } from 'lodash';

type Props = FlexProps & {
  children?: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const styleProps = omit(props, ['children']);

  return (
    <Flex
      alignItems={{ base: 'center' }}
      direction='column'
      minHeight='800px'
      height='100vh'
      {...styleProps}
    >
      <Box height={{ base: '40px' }}>Header</Box>
      <Flex minHeight='800px' height='100vh' width={{ base: '100%' }} maxWidth={{ base: '1440px' }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
