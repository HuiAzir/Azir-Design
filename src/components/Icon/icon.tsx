import React, { FC } from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'error'
  | 'light'
  | 'dark';
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: FC<IconProps> = props => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('azir-icon', className, {
    [`azir-icon-${theme}`]: theme
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
