import React from 'react';
import { root } from './Grid.css';

interface Props {
  children: React.ReactNode;
}

const Grid = ({ children }: Props) => {
  return <div className={root()}>{children}</div>;
};

export default Grid;
