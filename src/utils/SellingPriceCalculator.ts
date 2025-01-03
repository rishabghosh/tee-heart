import {productPromotions} from "@/data/productPromotions";

export const sellingPriceCalculator = (promotionCode: string, originalPrice: number)=> {
    const promotion = productPromotions[promotionCode];
    return promotion ? promotion.calculator(originalPrice) : originalPrice
}