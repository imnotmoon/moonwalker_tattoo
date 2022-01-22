import { recipe } from '@vanilla-extract/recipes';

export const flex = recipe({
	base: {
		display: 'flex',
	},

	variants: {
		direction: {
			row: {
				flexDirection: 'row',
			},
			column: {
				flexDirection: 'column',
			},
		},

		position: {
			center: {
				alignItems: 'center',
				justifyContent: 'center',
			},
		},
	},

	defaultVariants: {
		direction: 'row',
		position: 'center',
	},
});
