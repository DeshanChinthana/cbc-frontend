import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="home-container text-center">
        <h2 className="text-2xl text-blue-800 font-semibold my-8">Welcome to Our Website!</h2>
        <p className="mb-10">
          Explore a world of possibilities with our services. We are here to make your life easier and more enjoyable.
        </p>

        <div>
          <Link to="/login" className="bg-blue-700 hover:bg-blue-500 text-white p-4 mt-3">Login</Link>
        </div>
      </div>
    </div>
  )
}
