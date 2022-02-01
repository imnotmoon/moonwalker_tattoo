import React from 'react';

type FilterProp = {
  children: React.ReactNode,
}

const Filter: React.FC<FilterProp> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Filter;
