import fs from "fs";
import {categories} from "./menCategories.js";
import {themes} from "./menThemes.js";
import {prices} from "./menPrices.js";
import {sizesList} from "./sizeLists.js";
import {imageUrls} from "./menImageUrls.js";

const customers = ["men"]; // customers can be men, women, kids

// Helper functions to pick random items
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate products
function generateProducts(numProducts) {
    const products = [];
    const availableImageUrls = [...imageUrls]; // Clone the image URLs to maintain original

    for (let i = 1; i <= numProducts; i++) {
        const numImages = Math.floor(Math.random() * 7) + 2; // Randomly select between 2-8 images
        const selectedImages = getRandomSubset(availableImageUrls, numImages);

        // Remove selected images from available pool
        selectedImages.forEach(img => {
            const index = availableImageUrls.indexOf(img);
            if (index > -1) {
                availableImageUrls.splice(index, 1);
            }
        });

        const product = {
            id: i,
            name: `${getRandomItem(categories)} - ${getRandomItem(themes)}`,
            price: `₹${getRandomItem(prices)}`,
            imageUrl: selectedImages, // Use the selected unique image URLs
            category: getRandomItem(categories),
            customer: getRandomItem(customers),
            theme: getRandomItem(themes),
            sizes: getRandomItem(sizesList)
        };
        products.push(product);
    }

    return products;
}

// Helper function to pick a random subset of unique items
const getRandomSubset = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Generate and write products to a JSON file
const products = generateProducts(100);  // Change the number to generate more/less products
fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
console.log("Product data generated and saved to products.json");
