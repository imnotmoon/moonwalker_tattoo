import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const postItemWraper = recipe({
  base: {
    position: 'relative',
    width: '268px',
    height: '334px',
    filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25))',
  },
});

export const postItem = recipe({
  base: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: '#FFFFFF',
    border: '1px solid #BFBFBF',
    boxSizing: 'border-box',
    borderRadius: '20px',
  },
});

export const imageCarousel = recipe({
  base: {
    position: 'absolute',
    width: '100px',
    height: '50px',
    left: '90px',
    top: '90px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
});

export const desc = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '266px',
    height: '126px',
    left: '0px',
    bottom: '0px',
    padding: '10px 20px',
    background: '#000000',
    borderRadius: '0px 0px 20px 20px',
  },
});

export const uploadDate = recipe({
  base: {
    textAlign: 'right',
  },
});
