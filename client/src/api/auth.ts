import axios from 'axios';
import { User } from '../common/types';

export const signInUser = async (user: User) => {
  const response = await axios.post('http://localhost:5000/auth/signin', user);
};

export const signUpUser = async (user: User) => {
  const response = await axios.post('http://localhost:5000/auth/signup', user);
};
