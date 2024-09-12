import css from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import {
  selectContactsError,
  selectContactsLoading,
} from '../../redux/contacts/selectors.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>LOADING...</h2>}
      {isError && <h2>Sorry something went wrong... Try again later.</h2>}
      {!isLoading && !isError && <ContactList />}
    </div>
  );
};

export default ContactsPage;
