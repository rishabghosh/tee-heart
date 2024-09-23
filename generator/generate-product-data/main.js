import fs from "fs";
import { customerConfigs } from "./customerConfigs.js";

// Helper function to get random items from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Global variable to track unique IDs across customers
let globalProductId = 1;

// Function to generate products for a specific customer based on their configuration
function generateProducts(config, customer) {
    const { categories, themes, prices, imageUrls, sizesList } = config;
    const products = [];
    const availableImageUrls = [...imageUrls]; // Clone the image URLs to maintain original

    for (let i = 0; i < config.noOfProducts; i++) {
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
            id: globalProductId++, // Use and increment globalProductId
            name: `${getRandomItem(categories)} - ${getRandomItem(themes)}`,
            price: `${getRandomItem(prices)}`,
            imageUrl: selectedImages,
            category: getRandomItem(categories),
            customer: customer,
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

// Generate and write products to a JSON file for all customers
function generateAndSaveProductsForAllCustomers() {
    let allProducts = [];

    // Loop through customer configurations (men, women, etc.)
    for (const customer in customerConfigs) {
        const config = customerConfigs[customer];
        const products = generateProducts(config, customer);
        allProducts = allProducts.concat(products); // Append each customer's products to the overall list
    }

    // Write all products to the same JSON file
    fs.writeFileSync('products.json', JSON.stringify(allProducts, null, 2));
    console.log("Product data for all customers generated and saved to products.json");
}

// Generate products for all customers
generateAndSaveProductsForAllCustomers();
