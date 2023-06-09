import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchGroupsAsync = createAsyncThunk("allGroups", async () => {
  try {
    let { data } = await axios.get("http://localhost:8080/api/Groups");
    return data;
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const createGroupAsync = createAsyncThunk(
  "group/createGroup",
  async ({ groupData }, { rejectWithValue, getState }) => {
    try {
      const username = getState().auth.me.username;
      const userResponse = await axios.get(
        `http://localhost:8080/api/users/${username}`
      );
      const userId = userResponse.data.id;
      const response = await axios.post("/api/groups", {
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
  "group/fetchGroupsByCreatorId",
  async (creatorId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/groups/creator/${creatorId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroupIfMember = createAsyncThunk(
  'group/fetchGroupIfMember',
  async (groupId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.get(`/api/groups/${groupId}/members`);

      if (response.status === 200 && response.data) {
        const currentUser = getState().user;
        const isMember = response.data.some(member => member.id === currentUser.id);
        if (isMember) {
          return response.data;
        } else {
          throw new Error('User is not a member of the group');
        }
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroupById = createAsyncThunk(
  "group/fetchGroupById",
  async (groupId, { rejectWithValue }) => {
    if (!groupId) {
      return rejectWithValue("Invalid group ID");
    }
    try {
      const response = await axios.get(`/api/groups/${groupId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const joinGroupAsync = createAsyncThunk(
  "group/joinGroup",
  async ({ groupId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/groups/${groupId}/join`, {
        userId,
      });
      return response.data.group; // Dispatch the updated group object
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const leaveGroupAsync = createAsyncThunk(
  "group/leaveGroup",
  async ({ groupId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/groups/${groupId}/leave`, {
        userId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const allGroupsSlice = createSlice({
  name: "allGroups",
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
      })
      .addCase(joinGroupAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(leaveGroupAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchGroupById.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(fetchGroupIfMember.fulfilled, (state, action) => {
        const group = action.payload;
        const currentUser = state.auth.me;
        const isMember = group.some((member) => member === currentUser.id);
        // if (isMember) {
        //   // If the current user is a member, add the group to the state
        //   return [...state, group];
        // } else {
        //   // If the current user is not a member, do not update the state
        //   return state;
        // }
      });
    },
});

export const selectAllGroups = (state) => {
  return state.allGroups;
};

export default allGroupsSlice.reducer;
