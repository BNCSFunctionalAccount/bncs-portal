import Link from 'next/link'
import { FC, Fragment, SetStateAction } from 'react'

import { IMenuItem } from './types'

interface ISelectItemProps {
  item: IMenuItem
  key: string
  setOption?: (newVal: string) => void
  setIsOpen: (value: SetStateAction<boolean>) => void
}

export const SelectItem: FC<ISelectItemProps> = ({
  item,
  key,
  setOption,
  setIsOpen,
}) => {
  return (
    <Fragment key={key}>
      {item.link ? (
        <Link className="bg-lightGray border-b" href={item.link}>
          {item.title}
        </Link>
      ) : (
        <li
          className="p-1 bg-lightGray hover:cursor-pointer transition-all border-b last:rounded-b"
          onClick={(e) => {
            item.clickEffect && item.clickEffect(e)
            setIsOpen(false)
            setOption && setOption(item.title ?? '')
          }}
        >
          {item.title}
        </li>
      )}
    </Fragment>
  )
}
