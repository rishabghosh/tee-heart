import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";


const Kids: React.FC = () => {
    const kidsProducts = products.filter(product=> product.customer === 'kids');
    return <CustomerCategory title="Kids's Collection" products={kidsProducts} />;
};

export default Kids;
