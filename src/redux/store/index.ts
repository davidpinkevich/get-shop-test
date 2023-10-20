import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../slice';

const store = configureStore({
  reducer: { infoReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
