import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import ClassNames from 'classnames';
import { Omit } from '../../utils';

interface BaseButtonProps {
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: Boolean;
  href?: string;
  htmlType?: ButtonHtmlType;
  children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

type ButtonSize = 'lg' | 'sm';
type ButtonType = 'primary' | 'danger' | 'link' | 'default';
type ButtonHtmlType = 'submit' | 'reset' | 'button';

export type ButtonProps = Partial<
  AnchorButtonProps & Omit<NativeButtonProps, 'type'>
>;

const Button: FC<ButtonProps> = props => {
  const {
    className,
    size,
    type,
    disabled,
    href,
    children,
    htmlType,
    ...restProps
  } = props;
  const classes = ClassNames('azir-btn', className, {
    [`azir-btn-${type}`]: type,
    [`azir-btn-${size}`]: size,
    disabled: disabled && type === 'link'
  });
  if (type === 'link' && !href) {
    throw new Error(
      'If you want to use a link, you must pass the href attribute'
    );
  }
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        type={htmlType}
        disabled={disabled}
        className={classes}
        {...restProps}
      >
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  children: 'Button',
  type: 'default'
};
export default Button;
