import React from 'react';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Tee-Heart</h1>
                <p className={styles.description}>
                    Your one-stop shop for trendy and comfortable apparel.
                </p>
            </main>
        </div>
    );
};

export default Home;
