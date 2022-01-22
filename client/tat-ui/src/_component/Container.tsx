import React from 'react';

import { flex } from './_common.css';
import { container } from './Container.css';

const Container: React.FC = ({ children }) => {
	return (
		<div className={container}>
			<div className={flex({ direction: 'column' })}>{children}</div>
		</div>
	);
};

export default Container;
