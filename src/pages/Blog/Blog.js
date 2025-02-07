// BlogPage.js
import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchCategories, fetchPostsByCategory } from '../../content/fetchPosts'; 
import PostCard from '../../components/Blog/BlogPost';
import PostWidget from '../../components/Blog/BlogPostWidget';
import CategoryWidget from '../../components/Blog/BlogCategoryWidget';
import Navbar from '../../components/Navigation/Navbar';
import Banner from '../../components/Blog/BlogBanner';
import Footer from '../../components/Footer/Footer';
import { useCart } from "../../contexts/CartContext";

const Blog = () => {
    const { cartItems } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      if (selectedCategory) {
        const fetchedPosts = await fetchPostsByCategory(selectedCategory.slug);
        setPosts(fetchedPosts);
      } else {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      }
    };

    getPosts();
  }, [selectedCategory]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />
      <Banner />
      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          <div className="w-3/4 pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.node.slug} post={post} />)
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
          <div className="w-1/4 pl-4">
            <CategoryWidget categories={categories} onSelectCategory={handleCategorySelect} />
            <PostWidget />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
