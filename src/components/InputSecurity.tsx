import type { InputProps } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function InputSecurity(props: InputProps) {
  return (
    <Input
      {...props}
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
  );
}

export default InputSecurity;
