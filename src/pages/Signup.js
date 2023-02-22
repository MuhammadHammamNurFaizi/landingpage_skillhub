import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#3fba96] underline">
                   Sign up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-[#3fba96] bg-white border rounded-md focus:border-[#3fba96] focus:ring-[#3fba96] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-[#3fba96] bg-white border rounded-md focus:border-[#3fba96] focus:ring-[#3fba96] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Replay Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-[#3fba96] bg-white border rounded-md focus:border-[#3fba96] focus:ring-[#3fba96] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3fba96] rounded-md hover:bg-[#3fba96] focus:outline-none focus:bg-[#3fba96]">
                            <Link to='/login'> Sign up </Link>
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Do you have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-[#3fba96] hover:underline"
                    >
                        <Link to='/login'> Sign in </Link>
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Signup