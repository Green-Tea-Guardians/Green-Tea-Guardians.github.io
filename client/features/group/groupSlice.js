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
  async ({ groupData, creatorUsername }, { rejectWithValue }) => {
    try {
      // First, retrieve the user ID associated with the creator's username
      const userResponse = await axios.get(`/api/users?username=${creatorUsername}`);
      const userId = userResponse.data.id;

      // Then, create the new group with the retrieved user ID as the creator ID
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
    extraReducers:(builder) => {
        builder.addCase(fetchGroupsAsync.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(createGroupAsync.fulfilled, (state, action) => {
            state.push(action.payload);
          })
        .addCase(fetchGroupsByCreatorId.fulfilled, (state, action) => {
            return action.payload
       });
          
    }
})

export const selectAllGroups = (state) => {
    return state.allGroups
}

export default allGroupsSlice.reducer;