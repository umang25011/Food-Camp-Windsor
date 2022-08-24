import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loginWithGoogle } from "./loginSlice"
import "./loginPageCss.css"
import { Navigate, useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<
    { error: "email" | "password" | "name" | "confirmPassword" | "firstName" | "lastName"; message: string } | undefined
  >()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const navigate = useNavigate()
  const emailRedux = useAppSelector((state) => state.login.email)
  const dispatch = useAppDispatch()

  const handleValidation = () => {
    let formIsValid = true

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false
      setError({ error: "email", message: "Email Not Valid" })
      return false
    } else {
      formIsValid = true
    }

    if (formIsValid) setError(undefined)

    // TO DO
    // dispatch(updateData({ email: email, password: password, name: firstName + " " + lastName }))
  }

  useEffect(() => {
    if(emailRedux) {
      navigate("/profile")
    }
  }, [emailRedux])
  

  return (
    <div>
      <section className="login-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <form className="md-float-material form-material" action="#" method="POST">
                <div className="auth-box card">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="text-center heading">Food Camp</h3>
                      </div>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        id="first_name"
                      />
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        id="last_name"
                      />
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        id="email"
                      />
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                      />
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="password"
                        className="form-control"
                        name="password_confirm"
                        placeholder="Repeat password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="password_confirm"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="button"
                          className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          value="Signup Now"
                        />
                      </div>
                    </div>

                    <div className="or-container">
                      <div className="line-separator"></div> <div className="or-label">or</div>
                      <div className="line-separator"></div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <button
                          className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                          onClick={(e) => {
                            e.preventDefault()
                            dispatch(loginWithGoogle())
                          }}
                        >
                          <img alt="Google Logo" src="https://img.icons8.com/color/16/000000/google-logo.png" /> Signup
                          Using Google
                        </button>
                      </div>
                    </div>
                    <br />

                    <p className="text-inverse text-center">
                      Already have an account?{" "}
                      <a href="/login" data-abc="true">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
