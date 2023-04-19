import Layout from "../components/common/Layout"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from "react"

const schema = yup
  .object()
  .shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    password: yup.string().required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
  })
  .required()
const CreateAccount = () => {
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
  const createAccount = (formdata) => {
    //

    console.log("user submitted data - ", formdata)
    // do some database operation here

    setStep(2);
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
          {step === 1 ? (
            <form onSubmit={handleSubmit(createAccount)} className="px-8 py-6">
              <h1 className="text-xl mb-4">Create account</h1>

              <div className="mb-4">
                <label htmlFor="" className="block mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="border border-gray-200 focus:ring-1 ring-blue-300 outline-none focus:outline-none px-2 py-1 rounded-lg w-full"
                  {...register("fullname")}
                />
                {errors?.fullname && (
                  <p className="text-red-400 font-light">Please enter the name...</p>
                )}
              </div>
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
                  Gender
                </label>
                <select
                  name=""
                  id=""
                  className="bg-transparent border border-gray-200 focus:ring-1 ring-blue-300 outline-none focus:outline-none px-2 py-1 rounded-lg w-full"
                  {...register("gender")}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors?.gender && (
                  <p className="text-red-400 font-light">Please enter the gender...</p>
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
              <div className="mb-4">
                <label htmlFor="" className="block mb-2">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="border border-gray-200 focus:ring-1 ring-blue-300 outline-none focus:outline-none px-2 py-1 rounded-lg w-full"
                  {...register("confirm_password")}
                />
                {errors?.confirm_password && (
                  <p className="text-red-400 font-light">Password doesn't match...</p>
                )}
              </div>

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-blue-400 text-white rounded-lg w-full py-2">
                  Create account
                </button>
              </div>

              <Link to="/login-account">
                <div className="flex justify-center items-center">
                  <button className="bg-blue-50 mt-4 rounded-lg w-full py-2">
                    Already have an account?
                  </button>
                </div>
              </Link>
            </form>
          ) : step === 2 ? (
            <p className="text-2xl text-blue-400 px-8 py-8">Please verify your mail...</p>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

export default CreateAccount
