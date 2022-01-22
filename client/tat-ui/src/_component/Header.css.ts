import { style } from '@vanilla-extract/css';

export const header = style({
	background: 'rgba(0, 0, 0, 0)',
	backdropFilter: 'blur(30px)',
	height: '60px',
	borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: '2fr 4fr 1fr 1fr 1fr 1fr',
	padding: '0 30px',
	userSelect: 'none',
});

export const logo = style({
	fontSize: 20,
	cursor: 'pointer',
});

export const item = style({
	color: 'gray',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	':hover': {
		color: 'white',
		transition: 'all 0.3s ease',
	},
});

export const selectedItem = style([
	item,
	{
		color: 'white',
	},
]);
