import React from 'react';
import { formData } from '../../store/slice/dataSlice';
import classes from './FormCard.module.css';

const FormCard = ({ item }: { item: formData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img alt={''} src={item.picture} />{' '}
      </div>
      <div>name: {item.name}</div>
      <div>age: {item.age}</div>
      <div>gender: {item.gender}</div>
      <div>email: {item.email}</div>
      <div>password: {item.password}</div>
      <div>country: {item.country}</div>
      <div>terms and conditions: {item.terms_conditions && 'ok'}</div>
    </div>
  );
};

export default FormCard;
