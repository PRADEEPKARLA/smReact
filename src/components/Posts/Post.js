 
 // src/components/Posts/Post.js

 // src/components/Posts/Post.js

import React, { useState } from 'react';
import Comments from './Comments';
import AddComment from './AddComment';

const Post = ({ post }) => {
  const [newComment, setNewComment] = useState(null);
  const [showComments, setShowComments] = useState(false); // State for showing/hiding comments

  const handleCommentAdded = (newComment) => {
    setNewComment(newComment); // Update state with the new comment
  };

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <div className="post">
      <p>{post.text}</p>
      {post.imageUrl && (
        <img
          src={`http://localhost:5000${post.imageUrl}`}
          alt="Post"
          style={{ maxWidth: '100%' }}
          onError={() =>
            console.log(`Failed to load image: http://localhost:5000${post.imageUrl}`)
          }
        />
      )}
      {post.youtube && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${post.youtube}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {/* Toggle comments visibility */}
      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
        <div>
          {/* Display comments */}
          <Comments postId={post._id} newComment={newComment} />

          {/* Add a new comment */}
          <AddComment postId={post._id} onCommentAdded={handleCommentAdded} />
        </div>
      )}
    </div>
  );
};

export default Post;





// import React, { useState } from 'react';
// import Comments from './Comments';
// import AddComment from './AddComment';

// const Post = ({ post }) => {
//   const [newComment, setNewComment] = useState(null);

//   const handleCommentAdded = (newComment) => {
//     setNewComment(newComment); // Update state with the new comment
//   };

//   return (
//     <div className="post">
//       <p>{post.text}</p>
//       {post.imageUrl && (
//          <img
//          src={`http://localhost:5000${post.imageUrl}`} // Ensure no extra slashes are added
//          alt="Post"
//          style={{ maxWidth: '100%' }}
//          onError={() => console.log(`Failed to load image: http://localhost:5000${post.imageUrl}`)}
//        />
       
//       )}
//       {post.youtube && (
//         <iframe
//           width="560"
//           height="315"
//           //src={post.youtube.replace('watch?v=', 'embed/')}
//           src={`https://www.youtube.com/embed/${post.youtube}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       )}

//       {/* Display comments */}
//       <Comments postId={post._id} newComment={newComment} />

//       {/* Add a new comment */}
//       <AddComment postId={post._id} onCommentAdded={handleCommentAdded} />
//     </div>
//   );
// };

// export default Post;


 