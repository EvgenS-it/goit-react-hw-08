import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/filtersSelectors.js';

export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsLoading = state => state.contacts.contacts.loading;
export const selectContactsError = state => state.contacts.contacts.error;

// compound selector, which includes 2 simple selectors
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
