import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [];

export const fetchGroupsAsync = createAsyncThunk('allGroups', async () => {

   try {
    let {data} =  await axios.get('http://localhost:8080/api/Groups');
    console.log(data)
    return data;
   } catch (error) {
    console.log(error)
     next(error)
   }
})

export const allGroupsSlice = createSlice({
    name: 'allGroups',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchGroupsAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllGroups = (state) => {
    return state.allGroups
}

export default allGroupsSlice.reducer;