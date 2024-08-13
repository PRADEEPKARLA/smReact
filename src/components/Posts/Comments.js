 

// src/components/Posts/Comments.js

import React, { useEffect, useState } from 'react';

const Comments = ({ postId, newComment }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching comments for post:', postId);
    // Fetch comments when the component mounts or when the postId changes
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/posts/${postId}/comments`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  // Effect to update comments when a new comment is added
  useEffect(() => {
    if (newComment) {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  }, [newComment]);

  return (
    <div>
      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        comments.map(comment => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            <small>{new Date(comment.date).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;

