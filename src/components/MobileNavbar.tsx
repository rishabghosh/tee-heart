import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MobileNavBar.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const MobileNavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [selected, setSelected] = useState<string | null>(null); // For tracking selected item

    const handleSelect = (choice: string) => {
        setSelected(choice);
    };

    return (
        <>
            <nav className={styles.mobileNavbar}>
                <button onClick={() => setIsOpen(!isOpen)} className={styles.openButton}>
                    &#9776; {/* Triple vertical dash */}
                </button>
                <div className={styles.logo}>
                    <Link href="/">Tee-Heart</Link>
                </div>
                <div className={styles.cart}>
                    <Link href="/cart">Cart ({cartItems.length})</Link>
                </div>
            </nav>

            {isOpen && (
                <div className={styles.slideMenu}>
                    <button
                        className={`${styles.choiceButton} ${selected === 'men' ? styles.selected : ''}`}
                        onClick={() => { handleSelect('men'); setIsOpen(false); }}
                    >
                        Men
                    </button>
                    <button
                        className={`${styles.choiceButton} ${selected === 'women' ? styles.selected : ''}`}
                        onClick={() => { handleSelect('women'); setIsOpen(false); }}
                    >
                        Women
                    </button>
                    <button
                        className={`${styles.choiceButton} ${selected === 'kids' ? styles.selected : ''}`}
                        onClick={() => { handleSelect('kids'); setIsOpen(false); }}
                    >
                        Kids
                    </button>
                </div>
            )}
        </>
    );
};

export default MobileNavBar;
