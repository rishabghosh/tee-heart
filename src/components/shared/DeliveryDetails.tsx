import {CiDeliveryTruck} from "react-icons/ci";

import styles from '@/styles/allInOnePurchaseDetails.module.scss';

interface DeliveryDetailsProps {
    pincode: string;
    setPincode: React.Dispatch<React.SetStateAction<string>>;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({pincode, setPincode}) => {
    return (
        <div className={styles.deliveryDetails}>
            <div className={styles.deliveryHeading}>
                <h4>Delivery Options:</h4>
                <CiDeliveryTruck/>
            </div>
            <div className={styles.deliveryInputs}>
                <input type="text"
                       placeholder="Enter Pincode"
                       className={styles.pincodeInput}
                       value={pincode}
                       onChange={(e) => setPincode(e.target.value)}
                />
                <button className={styles.checkPincodeButton}>Check</button>
            </div>
        </div>
    );
};

export default DeliveryDetails;
