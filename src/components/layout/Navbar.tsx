import Link from 'next/link'
import React from 'react'

import SearchBar from '@components/common/SearchBar'

import styles from '@styles/components/common/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navContainer px-1">
        <Link href={`/`}>
          <h1 id="title">The Peaks</h1>
        </Link>
        <SearchBar />
      </div>
    </div>
  )
}

export default Navbar
