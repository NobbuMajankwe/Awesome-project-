import { createSlice } from '@reduxjs/toolkit';

const initialState = { value:""};
const dataSlice = createSlice({
name: 'username',
initialState,
reducers: {
usernameAdded: (state,action) => {
state.value = action.payload;
}
}
})

export const { usernameAdded } = dataSlice.actions

export default dataSlice.reducer