import React, { Component } from 'react';
import classes from './MainItem.module.css';

interface MainItemProps {
  item: Result;
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

class MainItem extends Component<MainItemProps> {
  constructor(props: MainItemProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.mainItem}>
        <p className={classes.name}>Planet: {this.props.item.name}</p>
        <p>Climate: {this.props.item.climate}</p>
        <p>Orbital Period: {this.props.item.orbital_period}</p>
        <p>Diameter: {this.props.item.diameter}</p>
      </div>
    );
  }
}

export default MainItem;