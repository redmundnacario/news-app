import { SortType } from '@models/entities/news'
import React, { FC } from 'react'

type DropdownPropsType = {
  handleOnChange: (value: SortType) => void
}

const Dropdown: FC<DropdownPropsType> = (props) => {
  const { handleOnChange } = props
  return (
    <div>
      <select
        name="sort-type"
        id="sort-type"
        defaultValue="newest"
        onChange={(e) => {
          handleOnChange(e.target.value as SortType)
        }}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  )
}

export default Dropdown
