import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import mensProducts from '@/data/menProducts.mock.json';

const Men: React.FC = () => {
    return <CustomerCategory title="Men's Collection" products={mensProducts} />;
};

export default Men;