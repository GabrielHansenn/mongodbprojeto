import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'; // Para o CSS do Header


const Header = () => {
  return (
    
    <header className={styles.header}>
      <div className={styles.navbar}>
        <h1>BuzzWave</h1>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/create-post">Criar Post</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
