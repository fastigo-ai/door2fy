// PostWidget.js
import React from 'react';

const PostWidget = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h3 className="text-xl font-semibold border-b pb-2">Recent Posts</h3>
      <ul className="mt-4">
        {/* You can map through your recent posts here */}
        <li className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Post Title 1</li>
        <li className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Post Title 2</li>
        <li className="py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Post Title 3</li>
      </ul>
    </div>
  );
};

export default PostWidget;
