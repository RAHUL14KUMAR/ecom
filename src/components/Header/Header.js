import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const logo=()=>{
  <div className={styles.logo}>
    <Link to="/">
      <h2>e<span>Shop</span></h2>
    </Link>
  </div>
}
function Header() {
  return (
    <header>
        <div className={styles.header}>
            {logo}
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contact us
                  </Link>
                </li>
              </ul>
              <div className={styles["header-right"]}>
                <span className={styles.links}>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                  <Link to='/order'>My orders</Link>
                </span>
                <span className={styles.cart}>
                  <Link to='/cart'>
                    Cart
                  </Link>
                </span>
              </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
