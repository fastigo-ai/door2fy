// CategoryWidget.js
import React from 'react';

const CategoryWidget = ({ categories, onSelectCategory }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h3 className="text-xl font-semibold border-b pb-2">Categories</h3>
      <ul className="mt-4">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li
              key={category.slug}
              className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryWidget;
