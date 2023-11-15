import React, { Component } from 'react';
import classes from './ErrorBoundary.module.css';
import '../../App.css';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../Interfaces/Interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    textError: '',
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
    this.setState({ textError: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.errorBoundary} data-testid="error-request">
          <div>
            <p data-testid="error-text">{this.state.textError}</p>
            <button
              className={'button'}
              onClick={() => {
                this.setState({ hasError: false });
              }}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
