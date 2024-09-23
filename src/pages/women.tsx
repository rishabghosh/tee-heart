import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";

const Women: React.FC = () => {
    const womensProducts = products.filter(product=> product.customer === 'women');

    return <CustomerCategory title="Women's Collection" products={womensProducts} />;
};

export default Women;
