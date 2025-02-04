import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/countReducer';
import filterReducer from './reducers/filterReducer';
import { ticketReducer } from './reducers/ticketReducer';
import sortingReducer from './reducers/sortingSlice';


export const store = configureStore({
  reducer: {
    filters: filterReducer,
    counter: countReducer,
    tickets: ticketReducer,
    sorting: sortingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
