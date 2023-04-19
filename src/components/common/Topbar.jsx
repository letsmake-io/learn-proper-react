import { useState } from "react"
import { Link } from "react-router-dom"

const Topbar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false)

  return (
    <>
      <section className="py-5 bg-white relative z-50">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <div className="">
            <h1 className="text-gray-600 text-3xl font-bold">Moutain Deo</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/create-account">Signup</Link>
              </li>
              <li>
                <Link to="/login-account">Login</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-green-400 text-white px-6 py-2 rounded-lg">Let's Goooo!</button>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 block md:hidden cursor-pointer"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </div>
      </section>

      <div
        className={`${
          mobileMenuShow === true ? "top-16" : "-top-48"
        } bg-gray-50 absolute left-0 right-0 px-8 py-4 pt-8 md:hidden transform transition-all duration-500`}>
        <ul className="space-y-6">
          <li>
            <Link to="/create-account">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/create-account">Signup</Link>
          </li>
          <li>
            <Link to="/login-account">Login</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Topbar
