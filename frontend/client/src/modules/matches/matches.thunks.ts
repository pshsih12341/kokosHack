import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../api/baseApi";

export const loadMatches = createAsyncThunk(
    'matches/loadMatches',
    async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get(`${BASE_URL}/api/matches`);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response?.data || 'Something went wrong');
        }
      }
)