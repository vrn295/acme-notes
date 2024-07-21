"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";
import styles from "./navbar.module.scss";
export const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h2>Acme Note</h2>
      </Link>
      <ul
        className={`${styles.nav_items} ${
          isMenuOpen ? styles.nav_items_open : styles.nav_items_close
        }`}
      >
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <Button size="small">Get Started</Button>
      </ul>
      <button onClick={toggleMenu} className={styles.hamburger}>
        <div className={`${styles.hamburger_lines}`}></div>
        <div className={`${styles.hamburger_lines}`}></div>
        <div className={`${styles.hamburger_lines}`}></div>
      </button>
    </nav>
  );
};
