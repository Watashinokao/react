import React, { Component } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';

interface MainProps {
  results: Result[];
}

interface Result {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

class Main extends Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    console.log(this.props.results);
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
