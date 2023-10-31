import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Result } from './Interfaces/Interfaces';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface MainProps {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

interface AppState {
  request: string;
  error: boolean;
  isLoaded: boolean;
  items: MainProps;
  textError: string;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      request: '',
      textError: '',
      error: false,
      isLoaded: true,
      items: {
        count: 0,
        next: '',
        previous: '',
        results: [],
      },
    };
  }

  fetchRequest = (request: string) => {
    fetch(`https://swapi.dev/api/planets?search=${request}`)
      .then((res) => res.json())
      .then(
        (result: MainProps) => {
          this.setState((prevState) => ({
            ...prevState,
            error: false,
            isLoaded: true,
            items: result,
            request: request,
          }));
        },
        (error: string) => {
          console.log(error);
          this.setState((prevState) => ({
            ...prevState,
            isLoaded: true,
            error: true,
          }));
        }
      );
  };

  componentDidMount() {
    const prevRequest = localStorage.getItem('prevRequest');
    this.setState((prevState) => ({
      ...prevState,
      isLoaded: false,
      request: prevRequest || '',
    }));
    this.fetchRequest(prevRequest || '');
  }

  handleRequest = (request: string) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoaded: false,
    }));
    this.fetchRequest(request.trim());
    localStorage.setItem('prevRequest', request.trim());
  };

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className={'app'}>
        {error ? (
          <p>Error</p>
        ) : !isLoaded ? (
          <p>Loading</p>
        ) : (
          <ErrorBoundary>
            <Header handleRequest={this.handleRequest} />
            <Main results={items.results} />
          </ErrorBoundary>
        )}
      </div>
    );
  }
}

export default App;
