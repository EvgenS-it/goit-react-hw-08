import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';
import {
  selectContactsError,
  selectContactsLoading,
} from '../redux/contactsSlice.js';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const isError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>LOADING...</h2>}
      {isError && <h2>Sorry something went wrong... Try again later.</h2>}
      {!isLoading && !isError && <ContactList />}
    </div>
  );
}

export default App;
