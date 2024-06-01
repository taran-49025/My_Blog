import React from 'react';
import './BlogPost.css';
import winterImage from './images/winter.jpg'; 
const BlogPost2 = () => {
  return (
    <div className="blog-post">
      <h2>Winter Wardrobe Essentials</h2>
      <p className="meta">June 1, 2024 by Taranjot Kaur</p>
      <img src={winterImage} alt="Winter Wardrobe Essentials" />
      <p>
        Stay warm and stylish with the must-have winter wardrobe essentials. Here are the key pieces you need to add to your collection:
      </p>
      <h3>Essential Items:</h3>
      <ul>
        <li>Cozy Wool Coats</li>
        <li>Chunky Knit Sweaters</li>
        <li>Stylish Scarves</li>
        <li>Leather Boots</li>
        <li>Beanies and Gloves</li>
      </ul>
      <hr />
    </div>
  );
};

export default BlogPost2;
