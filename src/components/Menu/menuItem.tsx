import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';
export interface MenuItemProps {
  index?: number;
  className?: string;
  disable?: boolean;
  style?: CSSProperties;
}
const MenuItem: FC<MenuItemProps> = props => {
  const { className, style, disable, children } = props;
  const classes = classNames('azir-menu-item', className, {
    'azir-menu-item-disable': disable
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
MenuItem.defaultProps = {
  disable: false
};
export default MenuItem;
