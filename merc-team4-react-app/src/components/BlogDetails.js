import { useState, useEffect } from "react";

import { useParams } from "react-router";

// import '../styles/BlogDetails.css';

 

const BlogDetails = () => {

   

    const blogParam = useParams();

    const [blog, setBlog] = useState({});

    const [comments, setComments] = useState([]);

    const [writerDetails, setWriterDetails] = useState({}); // State to store writer details

 

    useEffect(() => {

        // Fetch blog details

        fetch(`https://jsonplaceholder.typicode.com/posts/${blogParam.id}`)

            .then((response) => response.json())

            .then((data) => {

                setBlog(data);

            })

            .catch((error) => {

                console.error("Error fetching blog data:", error);

            });

 

        // Fetch comments

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blogParam.id}`)

            .then((response) => response.json())

            .then((data) => {

                setComments(data);

            })

            .catch((error) => {

                console.error("Error fetching comments:", error);

            });

 

        // Fetch writer details

        fetch(`https://jsonplaceholder.typicode.com/users/${blog.userId}`)

            .then((response) => response.json())

            .then((data) => {

                setWriterDetails(data);

            })

            .catch((error) => {

                console.error("Error fetching writer details:", error);

            });

    }, [blogParam.id, blog.userId]);

 

    return (

        <div className="blog-details">

            <h1>Blog Details</h1>

            <p><b>Posted By: </b>{writerDetails.name}</p>

            <p><b>Email: </b>{writerDetails.email}</p>

            <p>{blog.title}</p>

            <p>{blog.body}</p>

            <h4>Comments:</h4>

            <ul>

                {comments.map((comment, index) => (

                    <li key={index}>

                        <p><b>Name:</b> {comment.name}</p>

                        {/* <p>Email: {comment.email}</p> */}

                        <p><b>Comment:</b> {comment.body}</p>

                    </li>

                ))}

            </ul>

        </div>

    );

};

 

export default BlogDetails;