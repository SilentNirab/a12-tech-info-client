import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import Container from '../../../Components/Container';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handelLogOut = () => {
        logOut()
        .then(
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logout successfully",
                showConfirmButton: false,
                timer: 1500
              })
        )
    }

    const NavLinks = <>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? " text-[#F36F21]" : " "} >Home</NavLink></li>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/products'} className={({ isActive }) =>
                isActive ? " text-[#F36F21]" : " "} >Products</NavLink></li>

        {
            user ?
                <div className="flex items-center mx-4 z-[9999]">
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-black border-2">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow  menu-sm dropdown-content bg-base-100 rounded-box w-52 flex flex-col text-end space-y-2">
                            <li><p className="text-lg font-semibold">{user.displayName}</p></li>
                            <Link to={'/dashboard'}  className=" w-3/4 mx-auto text-white font-medium text-center bg-[#F36F21] px-1 py-1 rounded-md">Dashboard</Link>
                            <button onClick={handelLogOut} className="text-white w-3/4 mx-auto font-medium bg-[#F36F21] px-1 py-1 rounded-md">Logout</button>
                        </ul>
                    </div>
                </div>
                :
                <li className='text-lg font-bold mx-2'>
                    <NavLink to={'/login'} className={({ isActive }) =>
                        isActive ? " text-[#F36F21]" : " "} >Login</NavLink></li>
        }


    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="bg-base-300">
                    <Container>
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2"><img src={logo} alt="logo" /> </div>
                            <div className="flex-none hidden lg:block">
                                <ul className=" menu-horizontal flex items-center">
                                    {/* Navbar menu content here */}
                                    {NavLinks}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {NavLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;