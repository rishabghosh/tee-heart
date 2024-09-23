import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from '@/data/products.json';

const Men: React.FC = () => {
    const mensProducts = products.filter(product=> product.customer === 'men');
    return <CustomerCategory title="Men's Collection" products={mensProducts} />;
};

export default Men;