import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className=" min-h-screen flex items-center">
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <form action="">
                            <div className="relative mt-6">
                                <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                            </div>
                            <div className="relative mt-6">
                                <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div className="my-6">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                <Link to={'/signup'}
                                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                                    up
                                </Link>.
                            </p>
                            <div className="text-center form-control mt-4">
                                <button onClick={'F'} className="text-black font-bold border-black border-2 py-2 rounded-md flex justify-center items-center px-5"> <span className="mr-2">Google</span>
                                    <svg viewBox="0 0 48 48" className="w-5 mr-2">
                                        <title>Google Logo</title>
                                        <clipPath id="g">
                                            <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                        </clipPath>
                                        <g className="colors" clipPath="url(#g)">
                                            <path fill="#FBBC05" d="M0 37V11l17 13z" />
                                            <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                            <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                            <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;