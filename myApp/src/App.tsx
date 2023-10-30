import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      request: '',
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

  componentDidMount() {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then(
        (result: MainProps) => {
          this.setState({
            error: false,
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
          });
        }
      );
  }

  handleRequest = (request: string) => {
    this.setState({ isLoaded: true });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Something error</p>;
    } else if (!isLoaded) {
      return <p> Loading</p>;
    } else {
      return (
        <div className={'app'}>
          <Header />
          <Main results={this.state.items.results} />
        </div>
      );
    }
  }
}

export default App;
