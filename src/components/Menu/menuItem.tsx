import React, { CSSProperties, FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
export interface MenuItemProps {
  index: number;
  className?: string;
  disable?: boolean;
  style?: CSSProperties;
}
const MenuItem: FC<MenuItemProps> = props => {
  const { index, className, style, disable, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames('azir-menu-item', className, {
    'azir-menu-item-disable': disable,
    'azir-menu-item-active': index === context.index
  });
  const handleClick = () => {
    if (context.onSelect && !disable) {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.defaultProps = {
  disable: false
};
export default MenuItem;
