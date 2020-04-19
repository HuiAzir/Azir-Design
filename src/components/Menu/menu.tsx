import React, { CSSProperties, createContext, useState, FC } from 'react';
import classNames from 'classnames';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 });
const Menu: FC<MenuProps> = props => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const [currentActiveIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onSelect && onSelect(index);
  };

  const passedContext: IMenuContext = {
    index: currentActiveIndex!,
    onSelect: handleClick
  };

  const classes = classNames('azir-menu', className, {
    'azir-menu-horizontal': mode === 'horizontal',
    'azir-menu-vertical': mode === 'vertical'
  });
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};
export default Menu;
