import { applyMiddleware, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { start } from "repl"
import { googleLoginPopup } from "../../utils/firebase"
import { storeUserData } from "../../utils/localStorage"

export interface NormalUser {
  email: string
  password?: string
  name: string
  address: string
  birthDate: string
}

const normalUserInitialState: NormalUser = {
  email: "",
  password: "",
  name: "",
  address: "",
  birthDate: "",
}

export const loginWithGoogle = createAsyncThunk("user/loginWithGoogle", async () => {
  try {
    const res = await googleLoginPopup()
    return res
  } catch (error) {}
})

const userSlice = createSlice({
  name: "user",
  initialState: normalUserInitialState,
  reducers: {
    login: (state) => {
      // API().then(res=>{
      // state = res.data
      // })
    },
    logout: () => {},
    updateUserData: (state, { payload }) => {
      state = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
      if (payload) {
        state.name = payload.name
        state.email = payload.email

        storeUserData(state)
      }
    })
  },
})
export const { updateUserData } = userSlice.actions
export const userReducer = userSlice.reducer
