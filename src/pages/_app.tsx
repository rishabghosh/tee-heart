// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
