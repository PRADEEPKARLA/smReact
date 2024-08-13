//src/components/Navbar.js

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav>
//       <ul>
//         {/* <li>
//           <Link to="/">Home</Link>
//         </li> */}
//         {localStorage.getItem('token') ? (
//           <>
//             <li>
//                <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/create-post">Create Post</Link>
//             </li>
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        {localStorage.getItem('token') && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-post">Create Post</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

