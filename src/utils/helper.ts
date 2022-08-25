import { NormalUser } from "../features/login/userSlice"

// check if the all the user data exists
export function checkIfAllUserDataValid(user: NormalUser) {
  if (user?.name && user.name.split(" ").length >= 2 && user.address && user.email && user.birthDate) {
    // TODO: Check birthdate
    return true
  } else return false
}
