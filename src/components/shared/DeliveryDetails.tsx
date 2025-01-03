import { FaTruck } from 'react-icons/fa';
import styles from '@/styles/DeliveryDetails.module.scss';

interface DeliveryDetailsProps {
    pincode: string;
    setPincode: React.Dispatch<React.SetStateAction<string>>;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({ pincode, setPincode }) => (
    <div className={styles.deliveryDetails}>
        <h4>
            <FaTruck style={{ marginRight: '8px', color: '#ff5733' }} />
            Delivery Details:
        </h4>
        <div className={styles.deliveryInputs}>
            <input
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className={styles.pincodeInput}
            />
            <button className={styles.checkPincodeButton}>Check</button>
        </div>
    </div>
);

export default DeliveryDetails;
