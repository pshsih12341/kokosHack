import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { feedSlice } from '../modules/feed/feed.slice';
import { useDispatch, useSelector } from 'react-redux';
import { matchesSlice } from '../modules/matches/matches.slice';

export const store = configureStore({
  reducer: combineSlices(feedSlice,matchesSlice),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
