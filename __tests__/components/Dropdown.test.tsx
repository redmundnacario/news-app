import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Dropdown from '@components/common/Dropdown'

describe('Dropdown', () => {
  it('should render and changes value when option was clicked', () => {
    const handleOnChange = jest.fn()

    render(<Dropdown handleOnChange={handleOnChange} />)

    const dropDownElement = screen.getByTestId('select-sort-type')
    expect(dropDownElement).toBeInTheDocument()

    const newOption = screen.getByTestId('newest-option')
    const oldOption = screen.getByTestId('oldest-option')
    expect(newOption).toBeInTheDocument()
    expect(oldOption).toBeInTheDocument()

    fireEvent.change(dropDownElement, { target: { value: 'oldest' } })
    expect(handleOnChange).toHaveBeenCalledTimes(1)
    expect(handleOnChange).toHaveBeenCalledWith('oldest')
  })
})
