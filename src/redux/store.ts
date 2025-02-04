import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/countReducer';
import filterReducer from './reducers/filterReducer';
import sortingReducer from './reducers/sortingSlice';
import { ticketReducer } from './reducers/ticketReducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  counter: countReducer,
  tickets: ticketReducer,
  sorting: sortingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
