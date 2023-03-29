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

export const createGroupAsync = createAsyncThunk(
  'groups/createGroupAsync',
  async (groupData, thunkAPI) => {
    try {
      const response = await axios.post('/api/groups', groupData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
  
export const allGroupsSlice = createSlice({
    name: 'allGroups',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchGroupsAsync.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(createGroupAsync.fulfilled, (state, action) => {
            state.push(action.payload);
          });
    }
})

export const selectAllGroups = (state) => {
    return state.allGroups
}

export default allGroupsSlice.reducer;