import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import Input from '../Input';
import InputCalendar from '../InputCalendar';

function ModalAddUser({ isOpen, onClose }: any) {
  const formik = useFormik({
    // validationSchema: SignupSchema,
    initialValues: {
      name: '',
      last_name: '',
    },
    onSubmit: (values) => {
      console.log('%c [ values ]-21', 'font-size:13px; background:#06EE8D; color:#2f3656;', values);
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label='Nombre'
              id='name'
              name='name'
              type='text'
              marginBottom={{ base: '16px' }}
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder='Nombre'
            />
            <Input
              label='Apellido'
              id='last_name'
              name='last_name'
              type='text'
              marginBottom={{ base: '16px' }}
              onChange={formik.handleChange}
              value={formik.values.last_name}
              placeholder='Apellido'
            />

            <InputCalendar label='Fecha ' />
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddUser;
