import React, { Component } from 'react';
import classes from './MainItem.module.css';
import { Result } from '../../../Interfaces/Interfaces';

interface MainItemProps {
  item: Result;
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
