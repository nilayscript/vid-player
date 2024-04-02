import {configureStore} from '@reduxjs/toolkit';
import { authApi,constantReducer, homeApi } from '../services';


export const store = configureStore({
    reducer:{
       constant:constantReducer,
       [authApi.reducerPath]:authApi.reducer,
       [homeApi.reducerPath]:homeApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }).concat(
        authApi.middleware,
        homeApi.middleware,
    ),
});