import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allInvoices: {},
  isError: "",
};

export const loadInvoiceData = createAsyncThunk(
  "invoice/data",
  async (fetchData, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(
        "billing/analytics/student_invoices/?page=1&page_size=10"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const invoiceHistorySlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},

  extraReducers: {
    [loadInvoiceData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadInvoiceData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allInvoices = action.payload;
    },

    [loadInvoiceData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default invoiceHistorySlice.reducer;