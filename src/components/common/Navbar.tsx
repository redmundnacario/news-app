import React from 'react'

import styles from '@styles/components/common/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navContainer">
        <h1 id="title">The Peaks</h1>
      </div>
    </div>
  )
}

export default Navbar
