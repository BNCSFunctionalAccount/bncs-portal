import { FC, Fragment } from 'react'

import { IMenuItem } from './types'

interface ISelectItemProps {
  item: IMenuItem
  key: string
}

export const SelectItem: FC<ISelectItemProps> = ({ item, key }) => {
  return (
    <Fragment key={key}>
      {typeof item.clickEffect == 'string' ? (
        <a href={item.clickEffect}>{item.title}</a>
      ) : (
        <li onClick={item.clickEffect}>{item.title}</li>
      )}
    </Fragment>
  )
}
