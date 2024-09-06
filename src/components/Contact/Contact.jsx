import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

const Connact = ({ name, number, id }) => {
  const { infoContainer, icon, text, btn } = css;

  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    const thunk = deleteContact(contactId);
    dispatch(thunk);
  };

  return (
    <>
      <div className={infoContainer}>
        <p className={text}>
          <FaUser className={icon} />
          {name}
        </p>
        <p className={text}>
          <FaPhone className={icon} />
          {number}
        </p>
      </div>
      <button type="button" className={btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

Connact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Connact;
