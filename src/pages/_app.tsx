import type { AppProps } from 'next/app';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import NavBar from "@/components/NavBar";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <NavBar />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
