import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarDropDownItem from 'src/modules/NavbarDropDownItem';
import Button from '../Button';
import logo from '../../../public/logo.png';
import styles from './Navbar.module.scss';
import {COMPANY, SERVICES} from '../../utils/navbaritems';

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image alt="Logo" src={logo} width={60} height={40}/>
        </Link>
        <span> ARIGEM LOGISTICS </span>
      </div>
      <NavbarDropDownItem title="SERVICES" items={SERVICES}/>
      <NavbarDropDownItem title="COMPANY" items={COMPANY}/>
      <div className={styles.navItem}>BLOG</div>
      <Button />
    </div>
  );
}

export default Navbar;