import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`); 
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setAllBlogs(data);
            console.log(data);
          } catch (err) {
            // setError(err);
            console.error(err);
          }
        };
    
        fetchData();
      }, []); 

    return (
        <div>
            <h1>BlogList</h1>
            {allBlogs.map(blog => (
            <div key={blog.id}>
              {/* Render individual blog data as a clickable link */}
              <h2>
                <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
              </h2>
            </div>
          ))}
        </div>
    );
};

export default BlogList;

//
