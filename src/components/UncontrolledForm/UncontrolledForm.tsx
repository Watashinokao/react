import React, { FormEvent, useState } from 'react';
import classes from './UncontrolledForm.module.css';
import { boolean, number, object, ref, string, ValidationError } from 'yup';

const schema = object({
  name: string().required('поле обязательно'),
  age: number()
    .required('введите свой возраст')
    .integer()
    .typeError('введите свой возраст'),
  email: string().required('поле обязательно').email(),
  password: string()
    .required('поле обязательно')
    .min(8, 'пароль не содержит 8 символов'),
  repeatPassword: string()
    .required('поле обязательно')
    .min(8, 'пароль не содержит 8 символов')
    .oneOf([ref('password')], 'пароли не совпадают'),
  gender: string().required('поле обязательно'),
  picture: string().required('поле обязательно'),
  country: string().required('поле обязательно'),
  terms_conditions: boolean().oneOf([true], 'примите условия соглашения'),
});

const UncontrolledForm = () => {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: { [key: string]: string | boolean } = {};
    Array.from(event.currentTarget.elements).map((el) => {
      const input = el as HTMLInputElement;
      if (input.name) {
        if (input.type === 'checkbox') formData[input.name] = input.checked;
        else formData[input.name] = input.value;
      }
    });

    try {
      schema.validateSync(formData, { abortEarly: false });
    } catch (err) {
      const errors = err as ValidationError;
      errors.inner.map((er) => {
        setErrors((prevState) => ({
          ...prevState,
          [er.path as string]: er.message,
        }));
      });
    }
    console.log(errors);
  };

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
        Password{' '}
        <input name={'password'} type={'password'} placeholder={'Password'} />
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
        Country <input name={'country'} type={'text'} placeholder={'Country'} />
        <div>{errors.country}</div>
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
