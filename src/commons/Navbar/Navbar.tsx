import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarDropDownItem from 'src/modules/NavbarDropDownItem';
import Button from '../Button';
import logo from '../../../public/logo.png';
import styles from './Navbar.module.scss';
import {COMPANY, SERVICES} from '../../utils/navbaritems';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () =>{
    if(!menuOpen){
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image alt="Logo" src={logo} width={60} height={40}/>
          </Link>
          <span> ARIGEM LOGISTICS </span>
        </div>
        <div className={styles.navItems}>
          <NavbarDropDownItem title="SERVICES" items={SERVICES}/>
          <NavbarDropDownItem title="COMPANY" items={COMPANY}/>
          <p>BLOG</p>
          <Button text="Contact us"/>  
        </div>
        <div className={styles.menuBtn} onClick={handleClick}>
          <div className={menuOpen === true ? styles["menuBtnBurger"] +" "+ styles["open"] : styles.menuBtnBurger}>
          </div>
        </div>
      </div>
      { 
        menuOpen && 
        <div className={styles.menu}>
          <div>
            <NavbarDropDownItem title="SERVICES" items={SERVICES}/>
            <NavbarDropDownItem title="COMPANY" items={COMPANY}/>
            <p>BLOG</p>
            <Button text="Contact us"/>  
          </div>      
        </div>
      }      
    </div>
  );
}

export default Navbar;