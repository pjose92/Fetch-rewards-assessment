import {useEffect, useState} from 'react';
import axios from 'axios';
import List from '../Selection/Selection';
import { FormContainer, FormComponent, FormLabel, FormInput, SubmitButton, Title } from './Form.styles'

const Form = () => {
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [user, setUser] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then(({ data: { occupations, states } }) => {
        setOccupations(occupations);
        setStates(states);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const { fullForm: name, email, password, occupation, state } = user;

    if (name && email && password && occupation && state) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [user]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullForm: name, email, password, occupation, state } = user;

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", {
        name,
        email,
        password,
        occupation,
        state,
      }).then(() => {
        setIsComplete(true);
      })
      .catch((err) => console.error(err));
  }

  return (
    <FormContainer>
      {isComplete ? (
        <div className="success-wrapper">
          <h1>Success!</h1>
          <span className="notice">Did you need to go back?</span>
          <button onClick={()=>setIsComplete(false)}>Go back</button>
        </div>
      ) : (
        <>
          <Title>Please complete form</Title>
          <FormComponent onSubmit={handleSubmit}>
            <FormLabel htmlFor="">Full Name</FormLabel>
            <FormInput
              type="textbox"
              id="fullForm"
              placeholder="Full Name"
              value={user.fullForm}
              onChange={handleChange}
              required
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <FormLabel htmlFor="occupation">Occupation</FormLabel>
            <List
              list={occupations}
              listId="occupation"
              handleChange={handleChange}
              value={user.occupation}
            />
            <FormLabel htmlFor="state">State</FormLabel>
            <List
              list={states}
              format={({ name }) => name}
              listId="state"
              handleChange={handleChange}
              value={user.state}
            />
            <SubmitButton type="submit" disabled={isDisabled}>Submit</SubmitButton>
          </FormComponent>
        </>
      )}
    </FormContainer>
  );
}
export default Form;
