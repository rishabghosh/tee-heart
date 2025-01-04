import {productPromotions} from "@/data/productPromotions";

export const sellingPriceCalculator = (promotionCode: string, originalPrice: number)=> {
    const promotion = productPromotions[promotionCode];
    return promotion ? promotion.calculator(originalPrice) : originalPrice
}

export const calculateDiscountPercentage = (originalPrice:number, discountedPrice:number) => {
    if (originalPrice <= 0) {
        throw new Error("Original price must be greater than 0.");
    }
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return Math.round(discountPercentage)
};