import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <div id='auth-container' >
      <form onSubmit={handleSubmit} name={name} id='landing-form'>
        <div>
          <label htmlFor="username" className='landing-label'>
            <small>Username</small>
          </label>
          <input name="username" type="text" className='landing-input' />
        </div>
        <div>
          <label htmlFor="password" className='landing-label'>
            <small>Password</small>
          </label>
          <input name="password" type="password" className='landing-input'/>
        </div>
        <div>
          <button type="submit" id='submit-login'>{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default AuthForm;
