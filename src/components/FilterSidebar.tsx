interface FilterSidebarProps {
    categories: string[];
    themes: string[];
    sizes: string[];
    onFilterChange: (filterType: 'categories' | 'themes' | 'sizes', value: string) => void;
}
const FilterSidebar: React.FC<FilterSidebarProps> = ({
                                                         categories,
                                                         themes,
                                                         sizes,
                                                         onFilterChange
                                                     }) => {
    const handleCheckboxChange = (filterType: 'categories' | 'themes', value: string) => {
        onFilterChange(filterType, value);
    };

    const handleSizeClick = (size: string) => {
        onFilterChange('sizes', size);
    };

    return (
        <div>
            <h3>Categories</h3>
            {categories.map(category => (
                <div key={category}>
                    <input type="checkbox" onChange={() => handleCheckboxChange('categories', category)} />
                    <label>{category}</label>
                </div>
            ))}

            <h3>Themes</h3>
            {themes.map(theme => (
                <div key={theme}>
                    <input type="checkbox" onChange={() => handleCheckboxChange('themes', theme)} />
                    <label>{theme}</label>
                </div>
            ))}

            <h3>Sizes</h3>
            {sizes.map(size => (
                <button key={size} onClick={() => handleSizeClick(size)}>{size}</button>
            ))}
        </div>
    );
};

export default FilterSidebar
