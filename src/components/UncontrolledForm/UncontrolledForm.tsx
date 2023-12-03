import React, { FormEvent, useState } from 'react';
import classes from './UncontrolledForm.module.css';
import { boolean, number, object, ref, string, ValidationError } from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { dataSlice, formData } from '../../store/slice/dataSlice';
import { useNavigate } from 'react-router-dom';

const schema = object({
  name: string()
    .test(
      'Заглавная буква',
      'введите имя с заглавной буквы',
      (value) => !!value && value[0] === value[0].toUpperCase()
    )
    .required('поле обязательно'),

  age: number()
    .min(1, 'минимальный возраст 1')
    .typeError('введите свой возраст')
    .required('поле обязательно'),
  email: string().email('некорректный email').required('поле обязательно'),
  password: string()
    .min(8, 'пароль не содержит 8 символов')
    .required('поле обязательно'),
  repeatPassword: string()
    .min(8, 'пароль не содержит 8 символов')
    .oneOf([ref('password')], 'пароли не совпадают')
    .required('поле обязательно'),
  gender: string().required('поле обязательно'),
  picture: string().required('поле обязательно'),
  country: string().required('поле обязательно'),
  terms_conditions: boolean().oneOf([true], 'примите условия соглашения'),
});

const UncontrolledForm = () => {
  const navigate = useNavigate();
  const { cards } = useAppSelector((state) => state.dataReducer);
  console.log(cards);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: formData = {
      name: '',
      age: '',
      email: '',
      password: '',
      repeatPassword: '',
      gender: '',
      picture: '',
      country: '',
      terms_conditions: '',
    };
    Array.from(event.currentTarget.elements).map((el) => {
      const input = el as HTMLInputElement;
      if (input.name) {
        if (input.type === 'checkbox') data.terms_conditions = input.checked;
        else data[input.name as keyof typeof data] = input.value;
      }
    });

    try {
      const isValid = schema.validateSync(data, { abortEarly: false });
      if (!isValid) {
        dispatch(setCard(data));
        navigate('/');
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
