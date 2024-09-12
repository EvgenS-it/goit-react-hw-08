import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const Contact = ({ name, number, id }) => {
  const { infoContainer, icon, text, btn } = css;

  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    const thunk = deleteContact(contactId);
    dispatch(thunk)
      .unwrap()
      .then(() => {
        toast.success('Contact deleted succesfully!');
      });
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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
