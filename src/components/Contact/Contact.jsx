import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, phone } = contact;
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <button onClick={handleDeleteContact}>Delete</button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
