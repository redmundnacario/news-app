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
        data-testid={'select-sort-type'}
        className={styles.inputSelect}
        name="sort-type"
        id="sort-type"
        defaultValue="newest"
        onChange={(e) => {
          handleOnChange(e.target.value as SortType)
        }}
      >
        <option value="newest" data-testid={'newest-option'}>
          Newest first
        </option>
        <option value="oldest" data-testid={'oldest-option'}>
          Oldest first
        </option>
      </select>
    </div>
  )
}

export default Dropdown
