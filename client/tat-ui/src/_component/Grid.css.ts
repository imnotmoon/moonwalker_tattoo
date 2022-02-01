import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '4rem',
  }
});