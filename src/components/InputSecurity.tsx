import type { InputProps } from '@chakra-ui/react';
import { Input, Text } from '@chakra-ui/react';
import { omit } from 'lodash';

function InputSecurity(props: InputProps & { label?: string }) {
  const { label } = props;
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
    </>
  );
}

export default InputSecurity;
