import React from 'react';
import styles from '@/styles/MobileNavBar.module.scss';

interface SlideMenuProps {
    selected: string | null;
    onSelect: (choice: string) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ selected, onSelect }) => {
    return (
        <div className={styles.slideMenu}>
            <button
                className={`${styles.choiceButton} ${selected === 'men' ? styles.selected : ''}`}
                onClick={() => onSelect('men')}
            >
                Men
            </button>
            <button
                className={`${styles.choiceButton} ${selected === 'women' ? styles.selected : ''}`}
                onClick={() => onSelect('women')}
            >
                Women
            </button>
            <button
                className={`${styles.choiceButton} ${selected === 'kids' ? styles.selected : ''}`}
                onClick={() => onSelect('kids')}
            >
                Kids
            </button>
        </div>
    );
};

export default SlideMenu;
