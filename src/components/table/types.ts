import { ReactElement } from 'react'

export interface IHeader {
  title: string
  width?: string
}

export interface ICell<T extends string | ReactElement> {
  id?: string
  name?: string
  text: string
}

export type IRow<T extends string | ReactElement> = ICell<T>[]
