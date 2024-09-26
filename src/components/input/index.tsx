import { ChangeEvent, FC, FocusEvent, HTMLInputTypeAttribute } from 'react'

interface IInputProps {
  titleText?: string
  className?: string
  type?: HTMLInputTypeAttribute
  id: string
  placeholder?: string
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
  onInputBlur?: (e: FocusEvent<HTMLInputElement>) => unknown
  width?: string
  height?: string
  border?: boolean
  labelAbove?: boolean
}

export const Input: FC<IInputProps> = ({
  titleText = '',
  className = '',
  type = 'text',
  id,
  placeholder,
  onInputBlur,
  onInputChange,
  width,
  height,
  border = false,
  labelAbove = false,
}) => (
  <div className={`${className} ${labelAbove && 'flex flex-col pb-4'}`}>
    <label htmlFor={id} className={`mx-1 ${labelAbove && 'text-sm'}`}>
      {titleText}
    </label>
    <input
      width={width}
      height={height}
      onChange={onInputChange && onInputChange}
      onBlur={onInputBlur && onInputBlur}
      placeholder={placeholder}
      id={id}
      type={type}
      className={`${labelAbove ? 'pb-1' : 'py-1'} px-2 text-base ${border && 'border-darkGray border'} bg-lightGray rounded`}
    />
  </div>
)
