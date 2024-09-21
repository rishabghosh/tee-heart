import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import womensProducts from '../data/womenProducts.mock.json';

const Women: React.FC = () => {
    return <CustomerCategory title="Women's Collection" products={womensProducts} />;
};

export default Women;
