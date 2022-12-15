import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../Features/auth/userSlice';

const Nav = () => {
    const user = useSelector(selectUser);
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/")
      };
  return (
    <div>
            {/* Nav */}

            <nav className="flex justify-between  bg-gray-300 p-6">
        <div className="flex items-center flex-shrink-0 text-white ">
          <img
            src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png"
            width="50"
            height="50"
            alt=""
          />
          <span className="font-semibold text-xl tracking-tight">
            {" "}
            <h1 className="px-4">
              Welcome <span className="text-indigo-600	font-bold text-3xl ">{user.name}</span>
            </h1>
          </span>
        </div>

        <div className="md:flex-direction: column;">
          <div>
            
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
        
          </div>
        </div>
      </nav>
      {/* fin Nav */}
    </div>
  )
}

export default Nav
