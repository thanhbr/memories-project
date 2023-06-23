import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    navigate('/')
  } catch (error) {
    console.log('error', error);
  }
}

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    navigate('/')
  } catch (error) {
    console.log('error', error);
  }
}