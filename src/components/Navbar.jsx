import React from 'react'
import { use } from 'react'
import { NavLink, Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import UserAvatar from '../components/UserAvatar'
import { useRef } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const { user, loading } = use(AuthContext);
  const dropdownRef = useRef();
  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  const mainLinks = (
    <>
      <NavLink onClick={closeDropdown} to="/" viewTransition>Home</NavLink>
      <NavLink onClick={closeDropdown} to="/find-partners" viewTransition>Find Partners</NavLink>
    </>
  );
  const authLinks = (
    <>
      {user ? (
        <>
          <NavLink onClick={closeDropdown} to="/partner-profile" viewTransition>My Partner Profile</NavLink>
          <NavLink onClick={closeDropdown} to={`/my-connections/${user.email}`} viewTransition>My Connections</NavLink>
        </>
      ) : loading
          ? <span className="loading loading-dots loading-md"></span>
        :
        (
          <>
            <NavLink onClick={closeDropdown} to="/register" viewTransition>Register</NavLink>
            <NavLink onClick={closeDropdown} to="/login" viewTransition>Login</NavLink>
          </>
        )}
    </>
  );

  const themeToggle = (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input type="checkbox" value="dark" className="toggle theme-controller" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  )

  return (
    <div className="px-4 py-2 bg-base-100/10 backdrop-blur-2xl sticky top-0 z-50">
      <div className="flex justify-between items-center md:hidden">
        <Link to='/' viewTransition>
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          {user && <UserAvatar small={true} />}
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
        <div className="flex gap-4 justify-center items-center">
          <Link to='/' viewTransition>
            <Logo />
          </Link>
          {mainLinks}
          {themeToggle}
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
