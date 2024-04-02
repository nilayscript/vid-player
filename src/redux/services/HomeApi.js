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
    checkStatus: builder.query({
      query: (documentId) => ({
				url: "check-current-status",
				method: "GET",
			}),
			providesTags: (result) => (result ? ["home"] : ["home"]),
    }),
    getDocument: builder.query({
      query: (documentId) => ({
				url: `document/${documentId}`,
				method: "GET",
			}),
			providesTags: (result) => (result ? ["home"] : ["home"]),
    }),
  }),
});

export const {useGetDocumentQuery,useCheckStatusQuery} = homeApi;
export default homeApi;
