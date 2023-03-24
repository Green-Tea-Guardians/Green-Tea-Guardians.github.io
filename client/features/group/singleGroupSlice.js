import axios from "axios";

// Action Types
const FETCH_SINGLE_GROUP_SUCCESS = "FETCH_SINGLE_GROUP_SUCCESS";

// Action Creator
export const fetchSingleGroupSuccess = (group) => ({ type: FETCH_SINGLE_GROUP_SUCCESS, payload: group });

// Thunk Action Creator
export const fetchSingleGroup = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/groups/${id}`);
    dispatch(fetchSingleGroupSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// Reducer
const initialState = {};

const singleGroupSlice = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_GROUP_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default singleGroupSlice;

// Selector
export const selectSingleGroup = (state) => state.SingleGroup;
