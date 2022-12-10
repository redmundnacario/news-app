import React, { FC } from 'react'

import styles from '@styles/components/layout/Alert.module.scss'

export type AlertPropsType = {
  variant: 'success' | 'danger'
  content: string | JSX.Element
}

const Alert: FC<AlertPropsType> = (props) => {
  const { variant, content } = props
  return (
    <div
      className={styles.alertContainer}
      style={
        variant === 'success'
          ? { backgroundColor: 'green' }
          : { backgroundColor: 'red' }
      }
    >
      {content}
    </div>
  )
}

export default Alert
