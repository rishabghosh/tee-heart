import styles from '@/styles/ProductDetails.module.scss';

interface DeliveryDetailsProps {
    pincode: string;
    setPincode: React.Dispatch<React.SetStateAction<string>>;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({ pincode, setPincode }) => (
    <div className={styles.deliveryDetails}>
        <h4>Delivery Details:</h4>
        <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className={styles.pincodeInput}
        />
        <button className={styles.checkPincodeButton}>Check</button>
    </div>
);

export default DeliveryDetails;
