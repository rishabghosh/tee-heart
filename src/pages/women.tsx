import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";

const Women: React.FC = () => {
    return <CustomerCategory title="Women's Collection" products={products} />;
};

export default Women;
