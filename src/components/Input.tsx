import type { InputProps } from '@chakra-ui/react';
import { Box, Input, Text } from '@chakra-ui/react';
import { omit } from 'lodash';

function InputCustom(props: InputProps & { label?: string; error?: any }) {
  const { label, error } = props;
  const styleProps = omit(props, ['label']);
  return (
    <>
      <Text>{label}</Text>
      <Input {...styleProps} />
      <Box top='-16px' position='relative' minH={{ base: '16px' }}>
        {!!error && <Text color='red'>{error}</Text>}
      </Box>
    </>
  );
}

export default InputCustom;
