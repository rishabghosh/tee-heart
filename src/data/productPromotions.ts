type PromotionType = {
    code: string;
    description: string;
    calculator: (price: number) => number;
};

export type ProductPromotionsType = Record<string, PromotionType>;

export const productPromotions: ProductPromotionsType = {
    DIS20: {
        code: "DIS20",
        description: "20% off",
        calculator: (price: number): number => Math.round(price - (price * 0.20))
    }
}