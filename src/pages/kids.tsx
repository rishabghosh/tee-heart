import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import kidsProducts from '@/data/kidsProducts.mock.json';

const Kids: React.FC = () => {
    return <CustomerCategory title="Kids's Collection" products={kidsProducts} />;
};

export default Kids;
