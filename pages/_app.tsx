const { wrapper } = require('../src/store/store');

import '../src/index.css';
export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
