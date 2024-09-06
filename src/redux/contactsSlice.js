import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps.js';
import { selectNameFilter } from './filtersSlice.js';

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      }),
});

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

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;

// Vanila redux logic
// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }

//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             contact => contact.id !== action.payload
//           ),
//         },
//       };
//     }

//     default:
//       return state;
//   }
// };

// // action
// export const addContact = payload => {
//   return {
//     type: 'contacts/addContact',
//     payload,
//   };
// };

// // action
// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
