import { style } from '@vanilla-extract/css';

export const authContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '100vh',
  maxWidth: '100%',
});

export const authLeft = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const authRight = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});
