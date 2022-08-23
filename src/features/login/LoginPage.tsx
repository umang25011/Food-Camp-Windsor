import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { updateData } from "./loginSlice"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [emailError, setemailError] = useState("")

    const emailRedux = useAppSelector(state=>state.login.email)
    const dispatch = useAppDispatch()

  const handleValidation = () => {
    let formIsValid = true

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false
      setemailError("Email Not Valid")
      return false
    } else {
      setemailError("")
      formIsValid = true
    }

   
    dispatch(updateData({email:email, password:"", name: "Test User"}))
    return formIsValid
  }

  const loginSubmit = (e: any) => {
    e.preventDefault()
    const isFormValid = handleValidation()
    if (isFormValid) {

    }
  }

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <p>{emailRedux}</p>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
