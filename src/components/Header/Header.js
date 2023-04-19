import React,{useState} from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import {FaShoppingCart,FaTimes} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';

const logo=()=>{
  <div className={styles.logo}>
    <Link to="/">
      <h2>e<span>Shop</span></h2>
    </Link>
  </div>
}
const cart=(
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart
      <FaShoppingCart size={20}/>
      <p>0</p>
    </Link>
  </span>
)
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

function Header() {
  const [showMenu,setShowMenu]=useState(false);

  const toogleMenu=()=>{
    setShowMenu(!showMenu)
  }

  const hideMenu=()=>{
    setShowMenu(false);
  }
  return (
    <>
    <header>
        <div className={styles.header}>
            {logo}
            <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
            >
              <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>
              <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
                <li>
                  <Link to="/"className={activeLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={activeLink}>
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
                {cart}
              </div>
            </nav>
            <div className={styles["menu-icon"]}>
              {cart}
              <HiOutlineMenuAlt3 size={28} onClick={toogleMenu}/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
