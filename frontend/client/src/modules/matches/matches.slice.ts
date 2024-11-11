import { createSlice } from '@reduxjs/toolkit';
import { loadMatches } from './matches.thunks';

export interface Match {
    enemy:string,
    date:Date,
    place:string
}

export interface MatchesState {
  data: Match[];
  loading: boolean;
  error?: string | null ;
}

const initialState: MatchesState = {
  data: [
    { enemy: 'Team A', date: new Date('2024-10-05T14:30:00'), place: 'Stadium 1' },
    { enemy: 'Team B', date: new Date('2024-10-12T16:00:00'), place: 'Stadium 2' },
    { enemy: 'Team C', date: new Date('2024-10-19T18:00:00'), place: 'Stadium 3' },
    { enemy: 'Team D', date: new Date('2024-10-26T19:30:00'), place: 'Stadium 4' },
    { enemy: 'Team E', date: new Date('2024-11-02T20:00:00'), place: 'Stadium 5' },
    { enemy: 'Team F', date: new Date('2024-11-09T14:00:00'), place: 'Stadium 6' },
    { enemy: 'Team G', date: new Date('2024-11-16T15:30:00'), place: 'Stadium 7' },
    { enemy: 'Team H', date: new Date('2024-11-23T17:00:00'), place: 'Stadium 8' },
    { enemy: 'Team I', date: new Date('2024-11-30T18:30:00'), place: 'Stadium 9' },
    { enemy: 'Team J', date: new Date('2024-12-07T19:00:00'), place: 'Stadium 10' }
  ],
  loading: false,
  error: null
};

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addCase(loadMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload.message;
      })
      .addCase(loadMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
