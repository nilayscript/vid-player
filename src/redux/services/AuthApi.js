import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../config";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("auth-token", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
export default authApi;
