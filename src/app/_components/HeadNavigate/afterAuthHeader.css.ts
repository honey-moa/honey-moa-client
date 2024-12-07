import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  width: '100dvw',
  maxWidth: '100%',
  borderBottom: '1px solid #00000011',
  padding: '1rem 1.5rem',
});

export const contents = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  padding: '0 25px',
});

export const coupleTitle = style({
  padding: 0,
  margin: 0,
  fontSize: '1rem',
});

export const rightWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const unLockSvg = style({});
globalStyle(`${unLockSvg}  path`, {
  stroke: '#DC2526',
});

export const settingSvg = style({
  padding: 10,
  margin: '0px 25px',
  borderRadius: '50%',
  cursor: 'pointer',
  ':hover': {
    background: 'rgba(0,0,0,0.1)',
  },
});
