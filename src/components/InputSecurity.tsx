import type { InputProps } from '@chakra-ui/react';
import { Input, Text, Box } from '@chakra-ui/react';
import { omit } from 'lodash';

function InputSecurity(props: InputProps & { label?: string; error?: any }) {
  const { label, error } = props;
  const styleProps = omit(props, ['label']);
  return (
    <>
      <Text>{label}</Text>
      <Input
        {...styleProps}
        onCopy={(event) => {
          event.preventDefault();
        }}
        onCut={(event) => {
          event.preventDefault();
        }}
        onPaste={(event) => {
          event.preventDefault();
        }}
      />
      <Box minH={{ base: '16px' }}>{!!error && <Text color='red'>{error}</Text>}</Box>
    </>
  );
}

export default InputSecurity;
