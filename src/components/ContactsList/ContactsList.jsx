import PropTypes from 'prop-types';
import { Button, List, Item, Text } from './ContactsList.styled';
import { VscClose } from 'react-icons/vsc';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              <VscClose size={20} />
            </Button>
          </Item>
        ))}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
