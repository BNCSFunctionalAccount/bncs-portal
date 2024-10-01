import { FC, useState } from 'react'

import { SelectItem } from './select-item'
import { IMenuItem } from './types'

interface ISelectProps {
  titleText?: string
  id?: string
  menuItems: IMenuItem[]
  width?: string
  height?: string
  gapSize?: string
  border?: boolean
  setOption?: (value: string) => void
  selectedOption?: string
  labelAbove?: boolean
}

export const Select: FC<ISelectProps> = ({
  titleText,
  id,
  menuItems = [],
  width = '10em',
  height = '2em',
  border = false,
  setOption,
  selectedOption,
  labelAbove = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`${labelAbove ? 'flex-col ' : 'items-center gap-2'}`}>
      {titleText && <label htmlFor={id}>{titleText}</label>}
      <div className={`relative`} style={{ width: width, height: height }}>
        <div
          className={`${border ? 'border-darkGray' : 'border-lightGray'} flex bg-lightGray items-center p-1 
                    justify-centr font-medium hover:bg-opacity-100 
                    bg-opacity-75 transition-colors after:absolute after:inline-block after:right-3 pl-2
                    ${
                      isOpen
                        ? 'rounded-t border-t border-x after:-rotate-90'
                        : 'rounded border after:rotate-90 hover:cursor-pointer'
                    } after:transition-all after:content-['>']`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
        </div>
        {isOpen && (
          <ul
            id={id}
            className={`box-border w-full border-b border-x ${border ? 'border-darkGray' : 'border-lightGray'} left-0 absolute z-10 last:rounded-b`}
          >
            {menuItems.map((item, i) => (
              <SelectItem
                key={item.title ?? ''}
                selected={selectedOption == item.title}
                item={item}
                setOption={setOption}
                setIsOpen={() => setIsOpen(false)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
