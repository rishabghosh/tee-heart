import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/MobileNavBar.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SlideMenu from '@/components/shared/SlideMenu'; // Import the SlideMenu component
import { useRouter } from 'next/router';

const MobileNavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [selected, setSelected] = useState<string | null>(null); // For tracking selected item
    const menuRef = useRef<HTMLDivElement | null>(null); // Ref to the slide menu
    const router = useRouter(); // Access the router to determine the current route

    useEffect(() => {
        // Set the selected item based on the current route
        const currentPath = router.pathname.split('/')[1]; // Extract the selected category from the route
        setSelected(currentPath || null);
    }, [router.pathname]);

    const handleSelect = (choice: string) => {
        setSelected(choice);
        setIsOpen(false); // Close menu when an option is selected
        router.push(`/${choice}`); // Navigate to the selected choice
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Handle click outside of the slide menu
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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

            {/* Render SlideMenu if the menu is open */}
            {isOpen && (
                <div ref={menuRef}> {/* Attach ref to the slide menu */}
                    <SlideMenu selected={selected} onSelect={handleSelect} />
                </div>
            )}
        </>
    );
};

export default MobileNavBar;
