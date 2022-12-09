import { SortType } from '@models/entities/news'
import React, { FC } from 'react'

import styles from '@styles/components/common/Dropdown.module.scss'

type DropdownPropsType = {
  handleOnChange: (value: SortType) => void
}

const Dropdown: FC<DropdownPropsType> = (props) => {
  const { handleOnChange } = props
  return (
    <div>
      <select
        className={styles.inputSelect}
        name="sort-type"
        id="sort-type"
        defaultValue="newest"
        onChange={(e) => {
          handleOnChange(e.target.value as SortType)
        }}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  )
}

export default Dropdown
