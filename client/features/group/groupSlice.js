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
  'group/createGroup',
  async ({ groupData }, { rejectWithValue, getState }) => {
    try {
      // Get the username from the Redux state
      const username = getState().auth.me.username; // Updated line

      // First, retrieve the user ID associated with the creator's username
      const userResponse = await axios.get(`http://localhost:8080/api/users/${username}`);
      const userId = userResponse.data.id;
      console.log(`username: ${username}, userId: ${userId} th`); // Log the username and userId

      // Then, create the new group with the retrieved user ID as the creator ID
      const response = await axios.post('/api/groups', {
        ...groupData,
        creatorId: userId,
    // add username to the group data
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
      console.log('Fetching groups by creatorId:', creatorId);
      const response = await axios.get(`/api/groups/creator/${creatorId}`);
      console.log('Fetched groups:', response.data);
      console.log("Fetched data in action:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching groups by creatorId:', error);
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
        console.log("Data in reducer:", action.payload);
        return action.payload; // Return the new state instead of assigning it
      });
  },
});


export const selectAllGroups = (state) => {
    return state.allGroups
}

export default allGroupsSlice.reducer;