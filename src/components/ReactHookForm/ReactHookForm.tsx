import React, { FormEvent, useState } from 'react';
import classes from '../UncontrolledForm/UncontrolledForm.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from '../../schema/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/redux';
import { dataSlice } from '../../store/slice/dataSlice';
import { countries } from '../../countries/countries';

export interface Schema {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  picture: FileList;
  country: string;
  terms_conditions: boolean;
}
const ReactHookForm = () => {
  const [password, setPassword] = useState('');

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const navigate = useNavigate();
  const { setCard } = dataSlice.actions;
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Schema>({ mode: 'all', resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Schema> = (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.picture[0]);
    reader.onloadend = () => {
      dispatch(
        setCard({
          ...data,
          picture: reader.result as string,
        })
      );
      navigate('/');
    };
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.containerForm}>
      <h2 className={classes.title}>React Hook Form</h2>
      <label>
        Name <input {...register('name')} type={'text'} placeholder={'Name'} />
        <div>{errors.name?.message}</div>
      </label>
      <label>
        Age <input {...register('age')} type={'number'} placeholder={'Age'} />
        <div>{errors.age?.message}</div>
      </label>
      <label>
        Email{' '}
        <input {...register('email')} type={'email'} placeholder={'Email'} />
        <div>{errors.email?.message}</div>
      </label>
      <label>
        Password
        <div
          className={classes.password}
          style={{
            backgroundColor:
              password.length < 5
                ? '#8f0404'
                : errors.password?.message || password.length < 8
                  ? '#9a9208'
                  : '#098f04',
          }}
        ></div>
        <input
          value={password}
          onInput={(event) => handleChange(event)}
          {...register('password')}
          type={'password'}
          placeholder={'Password'}
        />
        <div>{errors.password?.message}</div>
      </label>
      <label>
        Repeat Password
        <input
          {...register('repeatPassword')}
          type={'password'}
          placeholder={'Repeat Password'}
        />
        <div>{errors.repeatPassword?.message}</div>
      </label>
      <label>
        Gender
        <select {...register('gender')} defaultValue="">
          <option value="" disabled hidden>
            Choose gender
          </option>
          <option value={'Male'}>Male</option>
          <option value={'Female'}>Female</option>
        </select>
        <div>{errors.gender?.message}</div>
      </label>
      <label>
        Upload Picture
        <input
          {...register('picture')}
          type={'file'}
          placeholder={'Upload Picture (extension: .png, .jpeg)'}
        />
        <div>{errors.picture?.message}</div>
      </label>
      <label>
        Country
        <input
          list="countriesList"
          {...register('country')}
          autoComplete="nope"
          type={'text'}
          placeholder={'Country'}
        />
        <div>{errors.country?.message}</div>
        <datalist id="countriesList">
          {countries.map((country, index) => {
            return <option key={index} value={country}></option>;
          })}
        </datalist>
      </label>
      <label className={classes.checkbox}>
        <input
          {...register('terms_conditions')}
          type="checkbox"
          id="terms_conditions"
        />
        I accept the Terms and Conditions
        <div>{errors.terms_conditions?.message}</div>
      </label>
      <button
        style={{
          cursor: !isValid ? 'default' : 'pointer',
        }}
        disabled={!isValid}
        className={classes.buttonSubmit}
      >
        Yup!
      </button>
    </form>
  );
};

export default ReactHookForm;
