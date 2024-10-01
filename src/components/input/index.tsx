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
  icon?: JSX.Element
}

export const Input: FC<IInputProps> = ({
  titleText,
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
  icon
}) => (
  <div className={`${className} ${labelAbove && 'flex flex-col pb-4'}`}>
    {titleText && (
      <label htmlFor={id} className={`mx-1`}>
        {titleText}
      </label>
    )}
    <div className='flex items-center'>
      {icon && (
        <i className='absolute p-2'>
          {icon}
        </i>
      )}
      <input
        width={width}
        height={height}
        onChange={onInputChange && onInputChange}
        onBlur={onInputBlur && onInputBlur}
        placeholder={placeholder}
        id={id}
        type={type}
        className={`py-1 pl-8 placeholder:text-slate-600 text-base ${border && 'border-darkGray border'} bg-lightGray rounded`}
      />
    </div>
  </div>
)
