import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./features/login/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>
              </header>
            </div>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
