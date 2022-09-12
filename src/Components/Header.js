import React from 'react';
import { toggleLogin } from "../store/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(toggleLogin())}>
        {auth.loggedIn ? 'logOut' : 'LogIn'}
      </button>
    </nav>
  );
};

export default Header;
