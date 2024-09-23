import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";
import {filterProductBasedOnCustomer} from "@/utils/filters";

const Women: React.FC = () => {
    return <CustomerCategory title="Women's Collection" products={filterProductBasedOnCustomer('women', products)} />;
};

export default Women;
