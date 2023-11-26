import { Provider } from 'react-redux';

const { wrapper } = require('../src/store/store');

import '../src/index.css';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link type="image/png" sizes="16x16" rel="icon" href="favicon16.png" />*/}
        {/*<link type="image/png" sizes="96x96" rel="icon" href="favicon32.png" />*/}
        {/*<link type="image/png" sizes="32x32" rel="icon" href="favicon96.png" />*/}
        <title>Disney</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
