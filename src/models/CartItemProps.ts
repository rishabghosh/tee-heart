export interface CartItemProps {
    id: number;
    name: string;
    price: number;
    size: string;
    qty: number;
    description: string;
    imageUrl: string;
    onRemove: () => void;
    onMoveToWishlist: () => void;
    onIncreaseQty: () => void;
    onDecreaseQty: () => void;
}
