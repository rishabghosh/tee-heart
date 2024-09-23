import React from 'react';
import CustomerCategory from '@/components/CustomerCategory';
import products from "@/data/products.json";
import {filterProductBasedOnCustomer} from "@/utils/filters";


const Kids: React.FC = () => {
    return <CustomerCategory title="Kid's Collection" products={filterProductBasedOnCustomer('kids', products)} />;
};

export default Kids;
