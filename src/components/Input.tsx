import type { InputProps } from '@chakra-ui/react';
import { Input, Text } from '@chakra-ui/react';
import { omit } from 'lodash';

function InputCustom(props: InputProps & { label?: string }) {
  const { label } = props;
  const styleProps = omit(props, ['label']);
  return (
    <>
      <Text>{label}</Text>
      <Input {...styleProps} />
    </>
  );
}

export default InputCustom;
