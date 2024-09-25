import { FC, Fragment } from 'react'

import { IMenuItem } from './types'
import Link from 'next/link'

interface ISelectItemProps {
  item: IMenuItem
  key: string
}

export const SelectItem: FC<ISelectItemProps> = ({ item, key }) => {
  return (
    <Fragment key={key}>
      {typeof item.clickEffect == 'string' ? (
        <Link className="bg-lightGray border-b" href={item.clickEffect}>
          {item.title}
        </Link>
      ) : (
        <li
          className="p-1 bg-lightGray hover:cursor-pointer transition-all border-b last:rounded-b-lg"
          onClick={item.clickEffect}
        >
          {item.title}
        </li>
      )}
    </Fragment>
  )
}
