import PropTypes from 'prop-types';
import { Title, Input } from './ContactsFilter.styled';

export const ContactsFilter = ({ value, onSearchContact }) => {
  return (
    <div>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        required
        value={value}
        onChange={onSearchContact}
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};
