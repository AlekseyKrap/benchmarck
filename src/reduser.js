import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rows: [],
    columns: [],
}
const table =createSlice({
    name: 'table',
    initialState,
    reducers: {
        setRows(state, action) {
            state.rows = action.payload;
        },
        setColumns(state, action)  {
            state.columns = action.payload;
        },

    },
});

export const {
    setRows,
    setColumns
} = table.actions;

export const tableReducer = table.reducer;
