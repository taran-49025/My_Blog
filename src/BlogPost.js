import React from 'react';
import './App.css';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Summer Fashion Trends 2024",
    date: "June 1, 2024",
    author: "Taranjot Kaur",
    image: 'summer.webp',
    content: "Discover the latest summer fashion trends for 2024. This season is all about vibrant colors, light fabrics, and bold patterns. Here are the top trends to keep you stylish this summer:",
    trends: [
      "Bright Neon Colors",
      "Light Linen Fabrics",
      "Bold Floral Prints",
      "Casual Chic Styles",
      "Accessorizing with Straw Hats and Sunglasses"
    ]
  },
  {
    id: 2,
    title: "Winter Fashion Trends 2024",
    date: "December 1, 2024",
    author: "John Smith",
    image: 'winter.jpg',
    content: "Explore the latest winter fashion trends for 2024. Stay warm and stylish with these key elements:",
    trends: [
      "Cozy Knits",
      "Layering Techniques",
      "Statement Outerwear",
      "Rich Jewel Tones",
      "Accessorizing with Scarves and Gloves"
    ]
  }
];

function App() {
  const userName = "John Doe";
  const logoText = "Fashion";

  return (
    <div className="App">
      <Navbar userName={userName} logoText={logoText} />
      <MyComponent userName={userName} logoText={logoText} /> {/* Passing props to MyComponent */}
      <div className="content">
        {blogPosts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            date={post.date}
            author={post.author}
            image={post.image}
            content={post.content}
            trends={post.trends}
          />
        ))}
      </div>
    </div>
  );
}

// Navbar component
const Navbar = ({ userName, logoText }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span>{logoText}</span>
    </div>
    <div className="navbar-user">
      <span>{userName}</span>
    </div>
  </nav>
);

// MyComponent component
const MyComponent = ({ userName, logoText }) => (
  <div className="my-component">
    <h2>Welcome, {userName}!</h2>
    <p>This is the {logoText} app.</p>
  </div>
);

// BlogPost component (assumed already defined somewhere else in the project)
const BlogPost = ({ title, date, author, image, content, trends }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <div className="post-meta">
      <span>{date} | By {author}</span>
    </div>
    <img src={image} alt={title} className="post-image" />
    <p>{content}</p>
    <h3>Trends:</h3>
    <ul>
      {trends.map((trend, index) => (
        <li key={index}>{trend}</li>
      ))}
    </ul>
  </div>
);

export default App;
