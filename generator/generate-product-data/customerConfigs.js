import { categories as menCategories } from "./menCategories.js";
import { themes as menThemes } from "./menThemes.js";
import { prices as menPrices } from "./menPrices.js";
import { imageUrls as menImageUrls } from "./menImageUrls.js";
import { sizesList as menSizesList } from "./sizeLists.js";
import { categories as womenCategories } from "./womenCategories.js";
import { themes as womenThemes } from "./womenThemes.js";
import { prices as womenPrices } from "./womenPrices.js";
import { imageUrls as womenImageUrls } from "./womenImageUrls.js";
import { sizesList as womenSizesList } from "./sizeLists.js";

export const customerConfigs = {
    men: {
        categories: menCategories,
        themes: menThemes,
        prices: menPrices,
        imageUrls: menImageUrls,
        sizesList: menSizesList,
        noOfProducts: 100 // Number of products to generate for men
    },
    women: {
        categories: womenCategories,
        themes: womenThemes,
        prices: womenPrices,
        imageUrls: womenImageUrls,
        sizesList: womenSizesList,
        noOfProducts: 100 // Number of products to generate for women
    }
};
