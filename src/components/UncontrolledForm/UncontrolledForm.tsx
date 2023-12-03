import React, { FormEvent, useEffect, useState } from 'react';
import classes from './UncontrolledForm.module.css';
import { ValidationError } from 'yup';
import { useAppDispatch } from '../../store/hooks/redux';
import { dataSlice } from '../../store/slice/dataSlice';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../schema/schema';
import { countries } from '../../countries/countries';

interface FormInputs extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  age: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  repeatPassword: HTMLInputElement;
  gender: HTMLInputElement;
  picture: HTMLInputElement;
  country: HTMLInputElement;
  terms_conditions: HTMLInputElement;
}
const UncontrolledForm = () => {
  const [password, setPassword] = useState('');

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const navigate = useNavigate();
  const { setCard } = dataSlice.actions;
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    repeatPassword: '',
    gender: '',
    picture: '',
    country: '',
    terms_conditions: '',
  });
  useEffect(() => {});
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputs = event.currentTarget.elements as FormInputs;
    const data = {
      name: inputs.name.value,
      age: inputs.age.value,
      email: inputs.email.value,
      password: inputs.password.value,
      repeatPassword: inputs.repeatPassword.value,
      gender: inputs.gender.value,
      picture: inputs.picture.files,
      country: inputs.country.value,
      terms_conditions: inputs.terms_conditions.checked,
    };

    try {
      const isValid = schema.validateSync(data, { abortEarly: false });
      if (isValid) {
        const reader = new FileReader();
        data.picture && reader.readAsDataURL(data.picture[0]);
        reader.onloadend = () => {
          dispatch(
            setCard({
              ...data,
              picture: reader.result as string,
            })
          );
          navigate('/');
        };
      }
    } catch (err) {
      const errors = err as ValidationError;
      errors.inner.map((er) => {
        setErrors((prevState) => ({
          ...prevState,
          [er.path as string]: er.message,
        }));
      });
    }
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} className={classes.containerForm}>
      <h2 className={classes.title}>Uncontrolled Form</h2>
      <label>
        Name <input name={'name'} type={'text'} placeholder={'Name'} />
        <div>{errors.name}</div>
      </label>
      <label>
        Age <input name={'age'} type={'number'} placeholder={'Age'} />
        <div>{errors.age}</div>
      </label>
      <label>
        Email <input name={'email'} type={'email'} placeholder={'Email'} />
        <div>{errors.email}</div>
      </label>
      <label>
        Password
        <div
          className={classes.password}
          style={{
            backgroundColor:
              password.length < 5
                ? '#8f0404'
                : errors.password || password.length < 8
                  ? '#9a9208'
                  : '#098f04',
          }}
        ></div>
        <input
          onInput={(event) => handleChange(event)}
          name={'password'}
          type={'password'}
          placeholder={'Password'}
        />
        <div>{errors.password}</div>
      </label>
      <label>
        Repeat Password
        <input
          name={'repeatPassword'}
          type={'password'}
          placeholder={'Repeat Password'}
        />
        <div>{errors.repeatPassword}</div>
      </label>
      <label>
        Gender
        <select name={'gender'} defaultValue="">
          <option value="" disabled hidden>
            Choose gender
          </option>
          <option value={'Male'}>Male</option>
          <option value={'Female'}>Female</option>
        </select>
        <div>{errors.gender}</div>
      </label>
      <label>
        Upload Picture
        <input
          name={'picture'}
          type={'file'}
          placeholder={'Upload Picture (extension: .png, .jpeg)'}
        />
        <div>{errors.picture}</div>
      </label>
      <label>
        Country{' '}
        <input
          list={'countriesList'}
          name={'country'}
          type={'text'}
          placeholder={'Country'}
        />
        <div>{errors.country}</div>
        <datalist id="countriesList">
          {countries.map((country, index) => {
            return <option key={index} value={country}></option>;
          })}
        </datalist>
      </label>
      <label className={classes.checkbox}>
        <input
          name={'terms_conditions'}
          type="checkbox"
          id="terms_conditions"
        />
        I accept the Terms and Conditions
        <div>{errors.terms_conditions}</div>
      </label>
      <button className={classes.buttonSubmit}>Yup!</button>
    </form>
  );
};

export default UncontrolledForm;
