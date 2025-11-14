import React from 'react'
import { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import UserAvatar from '../components/UserAvatar'
import logo from '../assets/logo.png'
import { useRef } from 'react'

const Navbar = () => {
  const { user } = use(AuthContext);
  const dropdownRef = useRef();
  const closeDropdown = () => {
  if (dropdownRef.current) {
    dropdownRef.current.removeAttribute("open");
  }
};

  const mainLinks = (
    <>
      <NavLink onClick={closeDropdown} to="/">Home</NavLink>
      <NavLink onClick={closeDropdown} to="/find-partners">Find Partners</NavLink>
    </>
  );
  const authLinks = (
    <>
      {user ? (
        <>
          <NavLink onClick={closeDropdown} to="/partner-profile">My Partner Profile</NavLink>
          <NavLink onClick={closeDropdown} to={`/my-connections/${user.email}`}>My Connections</NavLink>
        </>
      ) : (
        <>
          <NavLink onClick={closeDropdown} to="/register">Register</NavLink>
          <NavLink onClick={closeDropdown} to="/login">Login</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="px-4 py-2 glass bg-white/10 sticky top-0 z-50">
      <div className="flex justify-between items-center md:hidden">
        <div className="flex items-center gap-2">
          <img className="h-10" src={logo} alt="StudyMate logo" />
        </div>

        <div className="flex items-center gap-2">
          {user ? <UserAvatar small={true} /> : null}
          <details ref={dropdownRef} className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <ul className="menu menu-sm dropdown-content mt-3 z-60 p-2 shadow bg-base-100 rounded-box w-56 gap-1">
              <li>{mainLinks}</li>
              <div className="divider my-1" />
              <li>{authLinks}</li>
            </ul>
          </details>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="h-10" src={logo} alt="StudyMate logo" />
          {mainLinks}
        </div>
        <div className="flex gap-4 items-center">
          {user ? <UserAvatar small={true} /> : null}
          {authLinks}
        </div>
      </div>
    </div>
  );
};


export default Navbar
