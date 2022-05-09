import { Formik, ErrorMessage } from 'formik';

import * as yup from 'yup';
import PropTypes from 'prop-types';

import { FormBody, Title, Input, Button, Error } from './ContactsForm.styled';

import { toast } from 'react-toastify';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const phoneRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(32)
    .required('Please enter the name of your contact'),
  number: yup
    .string()
    .matches(
      phoneRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    )
    .required('Please enter the phone number of your contact'),
});

export const ContactsForm = ({ contacts, onAddContact }) => {
  const checkDuplicateName = values => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase(),
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    if (checkDuplicateName(values)) {
      toast.warn(
        'You are trying to enter a name that is already on the phonebook',
      );
      resetForm();
      return;
    }

    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormBody>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <ErrorMessage name="name" component={Error} />
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <ErrorMessage name="number" component={Error} />
        <Button type="submit">Add contact</Button>
      </FormBody>
    </Formik>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onAddContact: PropTypes.func.isRequired,
};
