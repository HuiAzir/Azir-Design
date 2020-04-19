import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';
type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}
const Menu: FC<MenuProps> = props => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const classes = classNames('azir-menu', className, {
    'azir-menu-horizontal': mode === 'horizontal',
    'azir-menu-vertical': mode === 'vertical'
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};
export default Menu;
