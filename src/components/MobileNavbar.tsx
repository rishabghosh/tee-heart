import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/MobileNavBar.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SlideMenu from "@/components/shared/SlideMenu"

const MobileNavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [selected, setSelected] = useState<string | null>(null); // For tracking selected item

    const handleSelect = (choice: string) => {
        setSelected(choice);
        setIsOpen(false); // Close menu when an option is selected
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        console.log("Menu is now", !isOpen ? "open" : "closed"); // Log menu state
    };

    return (
        <>
            <nav className={styles.mobileNavbar}>
                <button onClick={toggleMenu} className={styles.openButton}>
                    &#9776; {/* Triple vertical dash */}
                </button>
                <div className={styles.logo}>
                    <Link href="/">Tee-Heart</Link>
                </div>
                <div className={styles.cart}>
                    <Link href="/cart">Cart ({cartItems.length})</Link>
                </div>
            </nav>
            {isOpen ? <SlideMenu selected={selected} onSelect={handleSelect} /> : null}
        </>
    );
};

export default MobileNavBar;
