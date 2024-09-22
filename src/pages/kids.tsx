import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";


const Kids: React.FC = () => {
    return <CustomerCategory title="Kids's Collection" products={products} />;
};

export default Kids;
