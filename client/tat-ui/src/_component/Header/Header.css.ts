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
});

export const item = style({
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	':hover': {
		color: 'gray',
		transition: 'all 0.3s ease',
	},
});
