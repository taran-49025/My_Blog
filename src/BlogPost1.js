import React from 'react';
import './BlogPost.css';
import summerImage from './images/summer.webp'; 

const BlogPost1 = () => {
  return (
    <div className="blog-post">
      <h2>Summer Fashion Trends 2024</h2>
      <p className="meta">June 1, 2024 by Taranjot Kaur</p>
      <img src={summerImage} alt="Summer Fashion Trends" />
      <p>
        Discover the latest summer fashion trends for 2024. This season is all about vibrant colors, light fabrics, and bold patterns. Here are the top trends to keep you stylish this summer:
      </p>
      <h3>Top Trends:</h3>
      <ul>
        <li>Bright Neon Colors</li>
        <li>Light Linen Fabrics</li>
        <li>Bold Floral Prints</li>
        <li>Casual Chic Styles</li>
        <li>Accessorizing with Straw Hats and Sunglasses</li>
      </ul>
      <hr />
    </div>
  );
};

export default BlogPost1;
