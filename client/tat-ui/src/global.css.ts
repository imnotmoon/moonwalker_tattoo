import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 300,
});

globalStyle('a', {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 0',
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
});
