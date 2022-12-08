import Link from 'next/link'
import React from 'react'

import styles from '@styles/components/common/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navContainer">
        <Link href={`/`}>
          <h1 id="title">The Peaks</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
