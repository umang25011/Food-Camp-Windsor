import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import "../login/loginPageCss.css"
import { NormalUser, updateUserData } from "../login/userSlice"
import QRCode from "react-qr-code"
import { storeUserData } from "../../utils/localStorage"
import { checkIfAllUserDataValid } from "../../utils/helper"

export default function ProfilePage() {
  const userRedux = useAppSelector((state) => state.user)
  const [user, setUser] = useState<NormalUser>()
  const [qrCodeValue, setQrCodeValue] = useState("")
  const dispatch = useAppDispatch()

  useEffect(() => {
    setUser(userRedux)
  }, [userRedux])

  const saveUserData = () => {
    // check all the fields exists
    console.log("🚀 -> file: ProfilePage.tsx -> line 22 -> useEffect -> user", user)
    if (user && checkIfAllUserDataValid(user)) {
      setQrCodeValue(user.email)
      dispatch(updateUserData(user))
      storeUserData(user)
    } else {
    }
  }

  return user ? (
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
                        <h3 className="text-center heading">Profile</h3>
                      </div>
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={user.email}
                        readOnly
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        value={user.name}
                        onChange={(e) => {
                          setUser({ ...user, name: e.target.value })
                        }}
                        placeholder="Full name"
                      />
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={user.birthDate || "2000-11-25"}
                        onChange={(e) => {
                          if (e.target.value) {
                            setUser({ ...user, birthDate: e.target.value })
                          }
                        }}
                        placeholder="Birth Date"
                      />
                    </div>

                    <div className="form-group form-primary">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={user.address}
                        onChange={(e) => {
                          setUser({ ...user, address: e.target.value })
                        }}
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  <button
                    className="btn btn-primary m-4"
                    type="button"
                    onClick={() => {
                      saveUserData()
                    }}
                  >
                    Save
                  </button>

                  <div className="card-block">{qrCodeValue && <QRCode value={qrCodeValue} />}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : null
}
