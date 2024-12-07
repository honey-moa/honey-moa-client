import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  overflowX: 'hidden',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('ul, li', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});
