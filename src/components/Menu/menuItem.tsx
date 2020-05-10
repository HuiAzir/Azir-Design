import React, { CSSProperties, FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
export interface MenuItemProps {
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
  [propName: string]: any;
}
const MenuItem: FC<MenuItemProps> = props => {
  const { index, className, style, disabled, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames('azir-menu-item', className, {
    'azir-menu-item-disabled': disabled,
    'azir-menu-item-active': index === context.index
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'number') {
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
  disabled: false
};
MenuItem.displayName = 'MenuItem';

export default MenuItem;
