import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(registerThunk(userData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p>Username</p>
        <input type="text" name="name" required />
      </label>
      <label>
        <p>Email</p>
        <input type="email" name="email" required />
      </label>
      <label>
        <p>Password</p>
        <input type="password" name="password" required />
      </label>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
