import { FcMenu } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/images/logo.png'
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="drawer md:drawer-open first-line:">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className=" flex justify-between p-4">
                        <label htmlFor="my-drawer-2" className="btn bg-[#F36F21] hover:bg-[#ea7835] drawer-button md:hidden"><FcMenu className="text-xl"></FcMenu></label>
                        <img htmlFor="my-drawer-2" className="md:hidden w-32 h-12" src={logo} />
                    </div>
                    {/* dashboard content */}
                    <div className="flex-1 p-8">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#F36F21] text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to="/dashboard">
                                            Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/alluser">
                                            User profile</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard">
                                             Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addproduct">
                                            Add Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myproduct">
                                            My product</NavLink>
                                    </li>
                                </>

                        }

                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                Home</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;