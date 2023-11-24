import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import Container from '../../../Components/Container';

const Navbar = () => {


    const NavLinks = <>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive ? " text-[#fd8813]" : " "} >Home</NavLink></li>
        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/products'} className={({ isActive }) =>
                isActive ? " text-[#fd8813]" : " "} >Products</NavLink></li>

        <li className='text-lg font-bold mx-2'>
            <NavLink to={'/login'} className={({ isActive }) =>
                isActive ? " text-[#fd8813]" : " "} >Login</NavLink></li>

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
                                <ul className=" menu-horizontal">
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