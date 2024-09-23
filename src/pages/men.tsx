import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from '@/data/products.json';
import {filterProductBasedOnCustomer} from "@/utils/filters";

const Men: React.FC = () => {
    return <CustomerCategory title="Men's Collection" products={filterProductBasedOnCustomer('men', products)} />;
};

export default Men;