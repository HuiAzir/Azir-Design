import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import ClassNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'danger' | 'link' | 'default'
interface BaseButtonProps {
  className?: string
  size?: ButtonSize
  type?: ButtonType
  disabled?: Boolean
  href?: string
  children: React.ReactNode
}
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & Omit<AnchorButtonProps, 'type'>>
const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    size,
    type,
    disabled,
    href,
    children,
    ...restProps
  } = props
  const classes = ClassNames('azir-btn', className, {
    [`azir-btn-${type}`]: type
  })
}
Button.defaultProps = {

}
export default Button