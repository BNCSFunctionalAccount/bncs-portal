import { MouseEvent } from 'react'

export interface IMenuItem {
  title: string | undefined
  clickEffect: string | ((e: MouseEvent<HTMLLIElement>) => void)
}

export enum DIRECTION {
  DOWN = 'down',
  UP = 'up',
  LEFT = 'left',
  RIGHT = 'right',
}
