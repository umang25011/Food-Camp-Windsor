import { applyMiddleware, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { start } from "repl"
import { googleLoginPopup } from "../../utils/firebase"

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

const loginSlice = createSlice({
  name: "user",
  initialState: normalUserInitialState,
  reducers: {
    login: (state) => {
      // API().then(res=>{
      // state = res.data
      // })
    },
    logout: () => {},
    updateData: (state, action: PayloadAction<NormalUser>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
      if (payload) {
        state.name = payload.name
        state.email = payload.email
      }
    })
  },
})
export const { updateData } = loginSlice.actions
export const loginReducer = loginSlice.reducer
