import React from 'react';

import { style } from '@vanilla-extract/css';

const ImageSkeleton = () => {
	return <div className={skeleton}></div>;
};

const skeleton = style({
	width: '100px',
	height: '100px',
	background: 'rgb(75, 75, 75)',
});

export default ImageSkeleton;
