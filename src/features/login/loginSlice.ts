import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface NormalUser {
  email: string
  password?: string
  name: string
}

const normalUserInitialState: NormalUser = {
  email: "",
  password: "",
  name: "",
}

const loginSlice = createSlice({
  name: "Login Slice",
  initialState: normalUserInitialState,
  reducers: {
    login: () => {},
    logout: () => {},
    updateData: (state, action : PayloadAction<NormalUser>) => {
        state = action.payload
        return state
    }
},
})
export const { updateData} = loginSlice.actions
export const loginReducer = loginSlice.reducer
