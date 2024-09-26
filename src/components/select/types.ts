import { MouseEvent } from 'react'

export interface IMenuItem {
  title: string | undefined
  clickEffect?: (e: MouseEvent<HTMLLIElement>) => void
  link?: string
}
