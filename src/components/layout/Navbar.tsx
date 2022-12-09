import Link from 'next/link'
import React from 'react'

import SearchBar from '@components/common/SearchBar'

import styles from '@styles/components/common/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={`container px-1 ${styles.navContainer}`}>
        <Link href={`/`}>
          <h1 className={styles.title}>The Peaks</h1>
        </Link>

        <div className={styles.searchbar}>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
