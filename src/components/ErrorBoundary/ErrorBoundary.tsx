import React, { Component, ReactNode } from 'react';
import classes from './ErrorBoundary.module.css';
import '../../App.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.errorBoundary}>
          <p>Error!</p>
          <button
            className={'button'}
            onClick={() => {
              this.setState({ hasError: false });
            }}
          >
            OK
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;