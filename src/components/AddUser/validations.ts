import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  name: Yup.string().max(30, 'Demasiado largo').required('Requerido'),
  last_name: Yup.string().max(30, 'Demasiado largo').required('Requerido'),
  birthday: Yup.string().max(30, 'Demasiado largo').required('Requerido'),
});
