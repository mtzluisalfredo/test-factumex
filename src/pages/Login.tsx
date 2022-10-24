import { Center, Flex, Box, Text, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { isEqual } from 'lodash';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router';
import InputSecurity from '../components/InputSecurity';
import { useAuth } from '../contexts/auth';
import { SignupSchema } from '../validations/login';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: {
      password: '',
      user: '',
    },
    onSubmit: (values) => {
      const { user } = values;
      let useDemo = process.env.REACT_APP_USER;
      if (useDemo) {
        useDemo = JSON.parse(`${useDemo}`);
      }

      setError('');
      if (isEqual(values, useDemo)) {
        signin(user, () => {
          navigate(from, { replace: true });
        });
      } else {
        setError('Contraseña y/o usurio incorrecto');
      }
    },
  });

  return (
    <Center width={{ base: '100%' }}>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
          width={{ base: '400px' }}
          flexDirection='column'
        >
          <Box mb='16px' width={{ base: '300px' }}>
            <InputSecurity
              label='Correo electrónico'
              id='user'
              name='user'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.user}
              placeholder='Usuario'
            />
            <Box minH={{ base: '16px' }}>
              {!!formik.errors.user && <Text color='red'>{formik.errors.user}</Text>}
            </Box>
          </Box>
          <Box mb='16px' width={{ base: '300px' }}>
            <InputSecurity
              label='Contraseña'
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder='Contraseña'
            />
            <Box minH={{ base: '16px' }}>
              {!!formik.errors.password && <Text color='red'>{formik.errors.password}</Text>}
            </Box>
          </Box>
          <Button width={{ base: '300px' }} bg='cerulean' color='white' type='submit'>
            Login
          </Button>

          <Box minH={{ base: '16px' }}>{!!error && <Text color='red'>{error}</Text>}</Box>
        </Flex>
      </form>
    </Center>
  );
}
export default LoginPage;
