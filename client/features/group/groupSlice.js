import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [];

export const fetchGroupsAsync = createAsyncThunk('allGroups', async () => {

   try {
    let {data} =  await axios.get('http://localhost:8080/api/Groups');
    return data;
   } catch (error) {
    console.log(error)
     next(error)
   }
})


export const createGroupAsync = createAsyncThunk(
  'group/createGroup',
  async ({ groupData }, { rejectWithValue, getState }) => {
    try {
      const username = getState().auth.me.username; 
      const userResponse = await axios.get(`http://localhost:8080/api/users/${username}`);
      const userId = userResponse.data.id;
      const response = await axios.post('/api/groups', {
        ...groupData,
        creatorId: userId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroupsByCreatorId = createAsyncThunk(
  'group/fetchGroupsByCreatorId',
  async (creatorId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/groups/creator/${creatorId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const allGroupsSlice = createSlice({
  name: 'allGroups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroupsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createGroupAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(fetchGroupsByCreatorId.fulfilled, (state, action) => {
        return action.payload; 
      });
  },
});


export const selectAllGroups = (state) => {
    return state.allGroups
}

export default allGroupsSlice.reducer;