import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  password: Yup.string().max(50, 'Demasiado largo').required('Requerido'),
  user: Yup.string().max(50, 'Demasiado largo').required('Requerido'),
});
