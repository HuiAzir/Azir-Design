import React from 'react';
import Icon from './icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Example = () => {
  return (
    <>
      <Icon icon={faCoffee} size="2x" theme="danger" />
      <Icon icon={faCoffee} size="2x" theme="dark" />
      <Icon icon={faCoffee} size="2x" theme="success" />
      <Icon icon={faCoffee} size="2x" theme="primary" />
    </>
  );
};

export default Example;
