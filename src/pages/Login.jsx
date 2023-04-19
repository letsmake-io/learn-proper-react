import Layout from "../components/common/Layout"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from "react"

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required()
const LoginAccount = () => {
  const [step, setStep] = useState(1)

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  // creating user account
  const loginAccount = (formdata) => {
    //

    console.log("user submitted data - ", formdata)
    // do some database operation here

    reset()
  }

  // starting at users input changes
  const watchAll = watch()

  // shwoing all user errors here
  useEffect(() => {
    console.log(errors)
  }, [watchAll])

  return (
    <Layout>
      <div className="bg-gray-100 h-screen pt-32">
        <div className="gap-5 items-center w-[500px] h-auto mx-auto rounded-lg shadow shadow-blue-50 bg-white">
          <form onSubmit={handleSubmit(loginAccount)} className="px-8 py-6">
            <h1 className="text-xl mb-4">Create account</h1>

            <div className="mb-4">
              <label htmlFor="" className="block mb-2">
                Email address
              </label>
              <input
                type="text"
                className="border border-gray-200 focus:ring-1 ring-blue-300 outline-none focus:outline-none px-2 py-1 rounded-lg w-full"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-400 font-light">Please enter the email...</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block mb-2">
                Password
              </label>
              <input
                type="text"
                className="border border-gray-200 focus:ring-1 ring-blue-300 outline-none focus:outline-none px-2 py-1 rounded-lg w-full"
                {...register("password")}
              />
              {errors?.password && (
                <p className="text-red-400 font-light">Please enter the password...</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="bg-blue-400 text-white rounded-lg w-full py-2">
                Login
              </button>
            </div>

            <Link to="/login-account">
              <div className="flex justify-center items-center">
                <button className="bg-blue-50 mt-4 rounded-lg w-full py-2">
                  Don't have an account?
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default LoginAccount
