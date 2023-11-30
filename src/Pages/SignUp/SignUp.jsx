import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import usePublicAxios from "../../Hooks/usePublicAxios";
const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const publicAxios = usePublicAxios()
    const { createUser, userProfileUpdate, googleSignIn } = useAuth()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                userProfileUpdate(data.name, data.photoURL)
                    .then(() => {
                        // create entry in db
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        publicAxios.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedID) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    
                                }
                            })
                        navigate('/');    
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // create entry in db
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                publicAxios.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedID) {
                            console.log('user added to the database')
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                navigate('/');
            })
            .then(error => {
                console.error(error);
            })
    }
    return (
        <div className=" min-h-screen flex items-center">
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
                        <p className="mt-2 text-gray-500">Sign up below to create your account</p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} action="">
                            <div className="relative mt-6">
                                <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Name</label>
                            </div>
                            <div className="relative mt-6">
                                <input type="email" {...register("email", { required: true })} name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                            </div>
                            <div className="relative mt-6">
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            </div>
                            <div className="relative mt-6">
                                <input {...register("photoURL")} type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label htmlFor="photoURL" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">PhotoURL</label>
                            </div>

                            <div className="my-6">
                                <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
                            </div>
                            <p className="text-center text-sm text-gray-500">Already have an account?
                                <Link to={'/login'} className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ml-1">
                                    Sign in
                                </Link>

                            </p>
                            <div className="text-center form-control mt-4">
                                <button onClick={handelGoogleSignIn} className="text-black font-bold border-black border-2 py-2 rounded-md flex justify-center items-center px-5"> <span className="mr-2">Google</span>
                                    <FcGoogle className="text-xl"></FcGoogle>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;