import { Button, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import ModalAddUser from './ModalAddUser';

function AddUser({ onChangeInput, getEmployees }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        alignItems={{ base: 'center' }}
        marginY={{ base: '40px' }}
        justifyContent={{ base: 'space-between' }}
      >
        <Flex alignItems={{ base: 'center' }}>
          <Text fontWeight={{ base: 'bold' }} fontSize={{ base: '40px' }}>
            Tabla de empleados
          </Text>
          <Button marginX={{ base: '24px' }} bg='apple' color='white' onClick={onOpen}>
            Open Modal
          </Button>
        </Flex>
        <Input
          borderColor='silver'
          onChange={onChangeInput}
          placeholder='Buscar...'
          maxWidth={{ base: '300px' }}
        />
      </Flex>
      <ModalAddUser getEmployees={getEmployees} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default AddUser;
