 // src/App.js

 // src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreatePost from './components/Posts/CreatePost';
import PrivateRoute from './PrivateRoute';
import Post from './components/Posts/Post';
import PostList from './components/Posts/PostList'; // Import PostList component if used
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route displaying a list of posts */}
        <Route path="/" element={<Home />} />
        
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Route to create a new post */}
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />
        
        {/* Route to view a single post and its comments */}
        <Route
          path="/post/:postId"
          element={<Post />} // Displays a single post with comments
        />
        
        {/* Route for viewing a list of posts (optional) */}
        <Route
          path="/posts"
          element={<PostList />} // If you have a PostList component
        />
      </Routes>
    </Router>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import CreatePost from './components/Posts/CreatePost';
// import PrivateRoute from './PrivateRoute';
// import Post from './components/Posts/Post';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/create-post"
//           element={
//             <PrivateRoute>
//               <CreatePost />
//               <Post/>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
