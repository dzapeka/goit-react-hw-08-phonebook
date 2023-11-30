import React from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/auth.operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logInThunk(userData));

    // form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input type="email" name="email" required />
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" required />
      </label>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
