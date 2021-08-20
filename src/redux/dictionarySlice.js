import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDictionary = createAsyncThunk(
  "dictionary/fetchDictionary",
  async ({ dictionaryType, searchTerm }) => {
    const resp = await fetch(`https://sozluk.gov.tr/${dictionaryType}?ara=${searchTerm}`);
    const data = await resp.json();
    return data;
  }
);

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    dictionary: [],
  },
  reducers: {},
  extraReducers: {
      [fetchDictionary.fulfilled]: (state, action) => {
          state.dictionary.push(action.payload)
      }
  }
});

export default dictionarySlice.reducer;
