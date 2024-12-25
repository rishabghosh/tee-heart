import type { AppProps } from 'next/app';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import NavBar from "@/components/NavBar";
import React, {useEffect, useState} from "react";
import MobileNavBar from "@/components/MobileNavbar";

function MyApp({ Component, pageProps }: AppProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Provider store={store}>
            {isMobile ? <MobileNavBar /> : <NavBar />}
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
