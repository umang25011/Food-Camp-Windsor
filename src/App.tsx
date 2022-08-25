import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import LoginPage from "./features/login/LoginPage"
import HomePage from "./features/home/HomePage"
import ProfilePage from "./features/profile/ProfilePage"
import { getNormalUserData } from "./utils/localStorage"
import { useAppDispatch } from "./app/hooks"
import { updateUserData } from "./features/login/userSlice"
import { checkIfAllUserDataValid } from "./utils/helper"

function App() {
  const dispatch = useAppDispatch()

  // on every app load, get user data from localStorage and add to redux
  useEffect(() => {
    const user = getNormalUserData()
    console.log("🚀 -> file: App.tsx -> line 19 -> useEffect -> user", user)
    
    if (user && user.email) {
      console.log("🚀 -> file: App.tsx -> line 21 -> useEffect -> user", user)
      dispatch(updateUserData(user))
    } else {
      // navigate can't be used outside Router
      if (window.location.pathname !== "/login") window.location.href = "/login"
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
