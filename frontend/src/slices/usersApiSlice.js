import { USERS_URL } from '../constants';
//use apiSlice because we're dealing with endpoints that are dealing with async requests
import { apiSlice } from './apiSlice';

//injects endpoint into the main apiSlice
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
