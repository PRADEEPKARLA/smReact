// src/components/Posts/CreatePost.js

import React, { useState } from 'react';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [youtube, setYoutube] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    formData.append('youtube', youtube);
    if (image) formData.append('image', image);

    try {
      const res = await fetch('http://localhost:5000/api/posts/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        alert('Post created');
        setText(''); // Reset text input
        setImage(null); // Reset image input
        setYoutube(''); // Reset YouTube input
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="YouTube URL"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
