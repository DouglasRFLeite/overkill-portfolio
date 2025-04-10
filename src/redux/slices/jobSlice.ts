import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobState {
    value: string;
}

const initialState: JobState = {
    value: 'Engenheiro de Software'
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJob: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }    
});

export const {setJob} = jobSlice.actions;

export default jobSlice.reducer;
