import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../config";
import Cookies from "js-cookie";

export const homeApi = createApi({
  reducerPath: "homeApi",
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
  tagTypes: ["home"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: "check-current-status",
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: (documentId) => ({
        url: "document/" + documentId,
        method: "GET",
      }),
    }),
  }),
});

export const { useCheckStatusMutation, useDocumentMutation } = homeApi;
export default homeApi;
