// BlogBanner.js
import React from 'react';

const BlogBanner = () => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.svg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-16">
        <h1 className="text-3xl font-bold">Welcome to Our Blog</h1>
        <p className="text-xl mt-4">Discover the latest news, tips, and updates from our team.</p>
      </div>
    </div>
  );
};

export default BlogBanner;
