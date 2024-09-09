import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = instance.post('users/login', formData);
      console.log('data:', data);
      return data;
    } catch (error) {
      return thunkApi(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = instance.post('users/signup', formData);
      console.log('data:', data);
      return data;
    } catch (error) {
      return thunkApi(error.message);
    }
  }
);
