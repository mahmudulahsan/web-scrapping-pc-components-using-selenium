import React, {useEffect, useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [noOfItems, setNoOfItems] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setNoOfItems(items.length);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {noOfItems ? (
          <>
            <li className="nav-item pc-build">
              <Link className="nav-link" to="/pc-build">
                <div className='pc-build-image-container'>
                <img width={60} src="https://cdn-icons-png.flaticon.com/512/4617/4617777.png" alt="" />
                <span className='no-of-items'>{noOfItems}</span>
                </div>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item pc-build">
            <Link className="nav-link" to="/pc-build">
              <div className='pc-build-image-container'>
              <img width={60} src="https://cdn-icons-png.flaticon.com/512/4617/4617777.png" alt="" />
              </div>
            </Link>
          </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
