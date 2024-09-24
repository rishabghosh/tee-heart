import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductExtended } from '@/models/ProductExtended';

export const useFilterState = (products: ProductExtended[], onFilter: (filteredProducts: ProductExtended[]) => void) => {
    const router = useRouter();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const categories = Array.from(new Set(products.map(product => product.category)));
    const themes = Array.from(new Set(products.map(product => product.theme)));
    const sizes = Array.from(new Set(products.flatMap(product => product.sizes)));

    // Sync state with URL query parameters on initial load
    useEffect(() => {
        const { categories, themes, sizes } = router.query;

        if (categories) setSelectedCategories((categories as string).split(','));
        if (themes) setSelectedThemes((themes as string).split(','));
        if (sizes) setSelectedSizes((sizes as string).split(','));
    }, [router.query]);

    // Throttle state updates to avoid excessive URL updates
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const applyFilters = () => {
                let filtered = products;

                if (selectedCategories.length > 0) {
                    filtered = filtered.filter(product =>
                        selectedCategories.includes(product.category)
                    );
                }

                if (selectedThemes.length > 0) {
                    filtered = filtered.filter(product =>
                        selectedThemes.includes(product.theme)
                    );
                }

                if (selectedSizes.length > 0) {
                    filtered = filtered.filter(product =>
                        product.sizes.some(size => selectedSizes.includes(size))
                    );
                }

                onFilter(filtered);

                // Construct the query string based on selected filters
                const query: Record<string, string> = {};

                if (selectedCategories.length > 0) {
                    query.categories = selectedCategories.join(',');
                }

                if (selectedThemes.length > 0) {
                    query.themes = selectedThemes.join(',');
                }

                if (selectedSizes.length > 0) {
                    query.sizes = selectedSizes.join(',');
                }

                // Only update the URL if query parameters are actually different
                const currentQuery = router.query;
                if (
                    query.categories !== currentQuery.categories ||
                    query.themes !== currentQuery.themes ||
                    query.sizes !== currentQuery.sizes
                ) {
                    router.replace(
                        {
                            pathname: router.pathname,
                            query: { ...query },
                        },
                        undefined,
                        { shallow: true }
                    );
                }
            };

            applyFilters();
        }, 1); // Throttle the URL update to every 100ms

        return () => clearTimeout(timeoutId); // Clean up the timeout on unmount or when dependencies change
    }, [selectedCategories, selectedThemes, selectedSizes, products, onFilter, router]);

    const handleCheckboxChange = (filterType: 'categories' | 'themes', value: string) => {
        if (filterType === 'categories') {
            const updatedCategories = selectedCategories.includes(value)
                ? selectedCategories.filter(item => item !== value)
                : [...selectedCategories, value];
            setSelectedCategories(updatedCategories);
        } else if (filterType === 'themes') {
            const updatedThemes = selectedThemes.includes(value)
                ? selectedThemes.filter(item => item !== value)
                : [...selectedThemes, value];
            setSelectedThemes(updatedThemes);
        }
    };

    const handleSizeClick = (size: string) => {
        const updatedSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];
        setSelectedSizes(updatedSizes);
    };

    return {
        selectedCategories,
        selectedThemes,
        selectedSizes,
        handleCheckboxChange,
        handleSizeClick,
        categories,
        themes,
        sizes,
    };
};
