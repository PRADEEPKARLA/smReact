// src/components/Home.js
// src/components/Home.js

import React from 'react';
import PostList from './Posts/PostList';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  );
};

export default Home;


// import React from 'react';
// import PostList from './Posts/PostList';

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <PostList />
//     </div>
//   );
// };

// export default Home;
