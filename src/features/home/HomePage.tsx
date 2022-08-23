import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="container-sm text-center">
      <h1>Welcome To Food Camp</h1>
      <button
        type="button"
        className="btn btn-lg mt-4 btn-primary"
        onClick={() => {
          navigate("/login")
        }}
      >
        Log In
      </button>
    </div>
  )
}
