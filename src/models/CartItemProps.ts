export interface CartItemProps {
    id: number;
    name: string;
    price: number;
    size: string;
    availableSizes: string[];
    qty: number;
    description: string;
    imageUrl: string;
    onRemove: () => void;
    onMoveToWishlist: () => void;
    onIncreaseQty: () => void;
    onDecreaseQty: () => void;
}
