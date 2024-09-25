import { FC, useState } from 'react'

import { DIRECTION, IMenuItem } from './types'
import { SelectItem } from './select-item'

interface ISelectProps {
  titleText?: string
  burgerIcon?: boolean
  menuItems: IMenuItem[]
  direction?: DIRECTION
  width?: string
  height?: string
  gapSize?: string
  border?: boolean
}

export const Select: FC<ISelectProps> = ({
  titleText,
  burgerIcon = false,
  menuItems = [],
  direction = DIRECTION.DOWN,
  width = '10em',
  height = '2em',
  gapSize,
  border = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const directionCalc = () => {
    switch (direction) {
      case DIRECTION.RIGHT:
        return `left-[calc(100% + ${gapSize})]`
      case DIRECTION.LEFT:
        return `right-[calc(100% + ${gapSize})] left-[unset]`
      case DIRECTION.UP:
        return `bottom-[calc(100% + ${gapSize})]; top-[unset]`
      default:
        return `top-[calc(100% + ${gapSize})];`
    }
  }

  return (
    <div
      className={`relative ${burgerIcon ? 'text-left' : 'text-center'}`}
      style={{ width: width, height: height }}
    >
      {burgerIcon ? (
        <div>borg</div>
      ) : (
        <div
          className={`${border ? 'border-darkGray' : 'border-lightGray'} flex bg-lightGray after:content-['>'] items-center p-1 
                    justify-center font-medium hover:cursor-pointer hover:bg-opacity-100 
                    bg-opacity-75 transition-colors after:relative after:inline-block after:-right-3 
                    ${
                      isOpen
                        ? 'rounded-t-lg border-t border-x after:-rotate-90'
                        : 'rounded-lg border after:rotate-90'
                    } after:transition-all`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {titleText}
        </div>
      )}
      {isOpen && (
        <ul
          className={`box-border w-full border-b border-x ${border ? 'border-darkGray' : 'border-lightGray'} left-0 absolute z-10 ${directionCalc()} ${!burgerIcon && 'first:rounded-t-lg last:rounded-b-lg'}`}
        >
          {menuItems.map((item, i) => (
            <SelectItem key={item.title ?? ''} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}
