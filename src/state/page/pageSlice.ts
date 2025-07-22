import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        change: (state, action) => {
            state.value = action.payload;
            console.log(state.value)
        }
    },
})

export const {change} = pageSlice.actions;
export default  pageSlice.reducer;