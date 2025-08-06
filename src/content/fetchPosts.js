// service/fetchPosts.js

// Dummy data for categories
const dummyCategories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Lifestyle', slug: 'lifestyle' },
    { name: 'Health', slug: 'health' },
    { name: 'Business', slug: 'business' },
  ];
  
  // Dummy data for posts
  const dummyPosts = [
    {
      node: {
        slug: 'post-1',
        title: 'How to Learn React',
        excerpt: 'Learn how to get started with React and build dynamic web apps.',
        createdAt: '2025-01-01T00:00:00Z',
        featuredImage: { url: 'https://via.placeholder.com/500x300?text=React' },
        category: { name: 'Technology', slug: 'technology' },
      },
    },
    {
      node: {
        slug: 'post-2',
        title: 'Top 10 Lifestyle Tips for 2025',
        excerpt: 'Improve your daily life with these simple lifestyle changes.',
        createdAt: '2025-01-05T00:00:00Z',
        featuredImage: { url: 'https://via.placeholder.com/500x300?text=Lifestyle' },
        category: { name: 'Lifestyle', slug: 'lifestyle' },
      },
    },
    {
      node: {
        slug: 'post-3',
        title: 'Health Tips: How to Stay Fit',
        excerpt: 'A collection of tips to stay fit and healthy in 2025.',
        createdAt: '2025-01-10T00:00:00Z',
        featuredImage: { url: 'https://via.placeholder.com/500x300?text=Health' },
        category: { name: 'Health', slug: 'health' },
      },
    },
    {
      node: {
        slug: 'post-4',
        title: 'The Business of Starting a Startup',
        excerpt: 'What it takes to build a successful startup in 2025.',
        createdAt: '2025-01-15T00:00:00Z',
        featuredImage: { url: 'https://via.placeholder.com/500x300?text=Business' },
        category: { name: 'Business', slug: 'business' },
      },
    },
  ];
  
  // Fetch categories
  export const fetchCategories = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCategories);
      }, 1000); // Simulate delay
    });
  };
  
  // Fetch all posts
  export const fetchPosts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyPosts);
      }, 1000); // Simulate delay
    });
  };
  
  // Fetch posts by category
  export const fetchPostsByCategory = async (categorySlug) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredPosts = dummyPosts.filter(
          (post) => post.node.category.slug === categorySlug
        );
        resolve(filteredPosts);
      }, 1000); // Simulate delay
    });
  };
  