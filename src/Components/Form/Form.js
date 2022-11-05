import React from 'react';

const Form = () => (
  <div className="FormWrapper">
    <form>
      <h2>Register Your Account</h2>
      <label for="fullname">Full Name:</label>
      <input type="text"name="fullname" required></input>
      <label for="email">Email Address:</label>
      <input type="email" name="email" required></input>
      <label for="password">Password:</label>
      <input type="password" name="password" required></input>
      <label for="occupation">Occupation:</label>
      <button type="button" name="occupation">
        Select Occupation
      </button>
                
      <label for="state">State:</label>
      <button type="button" name="state">
        Select State
      </button>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default Form;
