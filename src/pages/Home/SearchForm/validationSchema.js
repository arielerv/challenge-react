import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Minimum 3 characters.')
    .required('This field is required.'),
});

export default validationSchema;
