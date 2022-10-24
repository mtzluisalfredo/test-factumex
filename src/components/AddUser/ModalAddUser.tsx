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
import useFetch from 'use-http';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import { registerValidation } from './validations';

function ModalAddUser({ isOpen, getEmployees, onClose }: any) {
  const { post, loading } = useFetch();
  const formik = useFormik({
    validationSchema: registerValidation,
    initialValues: {
      name: '',
      last_name: '',
      birthday: '',
    },
    onSubmit: async (values, actions) => {
      const response = await post('/examen/employees/luisalfredo', {
        ...values,
      });
      if (response?.success) {
        onClose();
        getEmployees();
        actions.resetForm();
      }
    },
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              label='Nombre'
              id='name'
              name='name'
              type='text'
              marginBottom={{ base: '16px' }}
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
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
              error={formik.errors.last_name}
              placeholder='Apellido'
            />

            <InputCalendar
              onChange={(value: any) => {
                formik.setFieldValue('birthday', value);
              }}
              error={formik.errors.birthday}
              label='Fecha de nacimiento'
              placeholder='Fecha de nacimiento'
            />
          </ModalBody>

          <ModalFooter>
            <Button
              bg='seagull'
              isDisabled={loading || !formik.isValid}
              type='submit'
              variant='ghost'
            >
              Guardar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddUser;
