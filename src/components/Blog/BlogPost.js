// PostCard.js
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
    <div className="h-48 bg-cover bg-center"></div>
    <div className="p-4">
      <p className="text-sm text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <h2 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
    </div>
    <Link to={`/post/${post.slug}`} className="block text-center bg-blue-600 text-white py-2 mt-4 rounded-b-lg hover:bg-blue-700">
      Read More
    </Link>
  </div>
);

export default PostCard;
