import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66d9926c4ad2f6b8ed553777.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data; // all data will be added to action.payload in fullField status
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      console.log('deleted contact:', data);
      return data; // all data will be added to action.payload in fullField status
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      console.log('added contact:', data);
      return data; // all data will be added to action.payload in fullField status
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
