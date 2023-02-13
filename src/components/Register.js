import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullName !== '' && validator.isEmail(email) && password.length >= 8) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form validation failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
          typetype="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default Register;