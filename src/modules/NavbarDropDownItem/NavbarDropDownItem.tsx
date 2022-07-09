import React from 'react';
import styles from './NavbarDropDownItem.module.scss'

const NavbarDropDownItem = ({title, items}) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
        <div><i className={styles.arrow}></i></div>
      </div>

      <div className={styles.itemDropDownContainer}>
        {
          items?.map((item) =>(
            <div key={item.id} className={styles.dropdownItem}>
              <p>{item.title}</p>
            </div>
          ))
        }
      </div>      
    </div>
  )
}

export default NavbarDropDownItem;