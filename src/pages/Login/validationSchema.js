import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('This field is required.'),
  password: Yup.string()
    .min(4, 'Minimum 4 characters.')
    .required('This field is required.'),
});

export default validationSchema;
