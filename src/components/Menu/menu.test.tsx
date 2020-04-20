import React, { FC } from 'react';
import {
  render,
  RenderResult,
  fireEvent,
  cleanup
} from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
};
const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
};

const generatorMenu = (props: MenuProps) => {
  return (
    <div data-testid="test-menu">
      <Menu {...props}>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>test</MenuItem>
      </Menu>
    </div>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('Test Menu and MenuItem Component', () => {
  beforeEach(() => {
    wrapper = render(generatorMenu(testProps));
    menuElement = wrapper.getByTestId('test-menu').firstChild as HTMLElement;
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('Should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('azir-menu azir-menu-horizontal test');
    expect(menuElement.getElementsByTagName('li').length).toBe(3);
    expect(activeElement).toHaveClass('azir-menu-item azir-menu-item-active');
    expect(disabledElement).toHaveClass(
      'azir-menu-item azir-menu-item-disabled'
    );
  });
  it('Click item should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('test');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('azir-menu-item-active');
    expect(activeElement).not.toHaveClass('azir-menu-item-active');
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('azir-menu-item-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it('Should render vertical mode when mode is set to vertical', () => {
    cleanup();
    const wrapper = render(generatorMenu(testVerticalProps));
    const menuElement = wrapper.getByTestId('test-menu')
      .firstChild as HTMLElement;
    expect(menuElement).toHaveClass('azir-menu-vertical');
  });
});
