import React, { Component } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';
import { Result } from '../../Interfaces/Interfaces';

interface MainProps {
  results: Result[];
}

class Main extends Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.main}>
        {this.props.results.map((item, index) => (
          <MainItem key={index} item={item}></MainItem>
        ))}
      </div>
    );
  }
}

export default Main;
