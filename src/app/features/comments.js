import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  comments: {},
  results: [],
  isError: "",
};

export const loadCommentsData = createAsyncThunk(
  "comments/data",
  async ({ fetchData, URL }, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(URL);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addNewComment: (state, action) => {
      state.results.push(action.payload);
    },
    addNewReplyComment: (state, {payload}) => {
      state.results?.forEach((result)=> result.id === payload.parent_comment && result.reply_comments.push(payload));
    },
  },

  extraReducers: {
    [loadCommentsData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadCommentsData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.results = action.payload?.results;
    },

    [loadCommentsData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { addNewComment, addNewReplyComment } = commentsSlice.actions;
export default commentsSlice.reducer;
