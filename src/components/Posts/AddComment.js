
// src/components/Posts/AddComment.js

import React, { useState } from 'react';

const AddComment = ({ postId, onCommentAdded }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('User is not authenticated.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ commentText: text })
      });

      const data = await response.json();
      if (response.ok) {
        setText('');
        console.log('Comment added:', data);
        if (onCommentAdded) onCommentAdded(data); // Notify the parent component with new comment
      } else {
        console.error('Error adding comment:', data.message);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;


 
