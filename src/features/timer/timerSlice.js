import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    running : false
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        start: (state) => { console.log(state.count); return {...state, count: state.count + 1, running : true }},
        stop: (state) => {console.log(state.count); return {...state, running : false } },
        reset: (state) => { return {...state, count: 0, running : false } }
    }
})

export const { start, stop, reset } = timerSlice.actions;
export default timerSlice.reducer;