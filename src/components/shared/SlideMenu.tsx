import React from 'react';
import Link from 'next/link';
import styles from '@/styles/MobileNavBar.module.scss';

interface SlideMenuProps {
    selected: string | null;
    onSelect: (choice: string) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ selected, onSelect }) => {
    return (
        <div className={styles.slideMenu}>
            <Link href="/men" passHref>
                <div
                    className={`${styles.choiceButton} ${selected === 'men' ? styles.selected : ''}`}
                    onClick={() => onSelect('men')}
                >
                    Men
                </div>
            </Link>
            <Link href="/women" passHref>
                <div
                    className={`${styles.choiceButton} ${selected === 'women' ? styles.selected : ''}`}
                    onClick={() => onSelect('women')}
                >
                    Women
                </div>
            </Link>
            <Link href="/kids" passHref>
                <div
                    className={`${styles.choiceButton} ${selected === 'kids' ? styles.selected : ''}`}
                    onClick={() => onSelect('kids')}
                >
                    Kids
                </div>
            </Link>
        </div>
    );
};

export default SlideMenu;
