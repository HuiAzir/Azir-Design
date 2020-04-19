import React, { FC, ReactNode, isValidElement, CSSProperties } from 'react';
import classNames from 'classnames';
export interface IAlertProps {
  className?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string | ReactNode;
  message?: string | ReactNode;
  style?: CSSProperties;
}
const Alert: FC<IAlertProps> = props => {
  // props
  const { className, type, title, message, ...restProps } = props;

  // classNames
  const classes = classNames('azir-alert', className, {
    [`azir-alert-${type}`]: type
  });
  const titleClass = 'azir-alert-title';
  const messageClass = 'azir-alert-message';

  return (
    <div className={classes} {...restProps}>
      {isValidElement(title) ? (
        title
      ) : (
        <span className={titleClass}>{title}</span>
      )}
      {isValidElement(message) ? (
        message
      ) : (
        <span className={messageClass}>{message}</span>
      )}
    </div>
  );
};

export default Alert;
