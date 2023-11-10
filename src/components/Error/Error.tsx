import React, { FC } from 'react';
import classes from './Error.module.css';

const Error: FC = () => {
  return (
    <div className={classes.container}>
      <p>
        Error 404 <span>not correct url</span>
      </p>
    </div>
  );
};

export default Error;
