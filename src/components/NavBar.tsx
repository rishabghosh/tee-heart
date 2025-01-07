import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const NavBar: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Tee Jutsu</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/men">Men</Link>
                </li>
                <li>
                    <Link href="/women">Women</Link>
                </li>
                <li>
                    <Link href="/kids">Kids</Link>
                </li>
                <li>
                    <Link href="/cart">Cart ({cartItems.length})</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
