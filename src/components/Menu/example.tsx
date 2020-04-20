import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';
const Example = () => {
  const data = [
    'MenuItem----1',
    'MenuItem----2',
    'MenuItem----3',
    'MenuItem----4'
  ];
  return (
    <>
      <Menu defaultIndex={0} onSelect={index => console.log(index)}>
        {data.map((item, index) => (
          <MenuItem key={index} index={index} disabled={index === 1}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        mode="vertical"
        defaultIndex={0}
        onSelect={index => console.log(index)}
        style={{ width: 200 }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} index={index} disabled={index === 1}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Example;
