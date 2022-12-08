import React from 'react'

import styles from '@styles/components/common/Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}

export default Spinner
