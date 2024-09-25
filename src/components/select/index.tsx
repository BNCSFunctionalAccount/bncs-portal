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
}

export const Select: FC<ISelectProps> = ({
  titleText,
  burgerIcon = false,
  menuItems = [],
  direction = DIRECTION.DOWN,
  width = '10em',
  height = '2em',
  gapSize,
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
          className={`flex after:content-['>'] items-center p-1 justify-center rounded font-medium
                    hover:cursor-pointer hover:bg-opacity-50 transition-all
                    after:relative after:inline-block after:-right-3 ${isOpen ? 'after:-rotate-90' : 'after:rotate-90'} after:transition-all`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {titleText}
        </div>
      )}
      {isOpen && (
        <ul
          className={`box-border border-2 left-0 absolute z-[3] ${directionCalc()} ${!burgerIcon && 'rounded-lg first:rounded-t-lg last:rounded-b-lg'}`}
        >
          {menuItems.map((item, i) => (
            <SelectItem key={item.title ?? ''} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}
