import { NormalUser } from "../features/login/userSlice"

const USER_LOCAL_STORAGE = "UserData"

export function storeUserData(user: NormalUser) {
  localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(user))
}

export function getNormalUserData() {
  const userData = localStorage.getItem(USER_LOCAL_STORAGE)
  if (userData) {
    try {
      const user = JSON.parse(userData) as NormalUser
      return user
    } catch (error) {
      throw new Error("Can't Read User Data, Login Again!")
    }
  }
}
