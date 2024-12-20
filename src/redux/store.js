import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favoritesReducer from './favoritesSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites']
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
