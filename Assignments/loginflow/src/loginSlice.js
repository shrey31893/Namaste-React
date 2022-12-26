const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
  },
  reducers: {
    loginDetails(state, action) {
      state.email = action.payload;
    },
    logout(state) {
      state.email = "";
    },
  },
});

export const { loginDetails, logout } = loginSlice.actions;
export default loginSlice.reducer;
