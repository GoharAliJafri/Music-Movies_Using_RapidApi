import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
// import { shazamCoreApi } from './services/shazamCore';
import { moviesApi } from './services/moviesCore';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    player: playerReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
