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

export const authWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonWrapper = style({
  margin: '0px 8px',
  height: 40,
  selectors: {
    'svg > path &': {
      stroke: '#ffffff',
    },
  },
});

export const signinIcon = style({});

//svg요소 접근
globalStyle(`${signinIcon} > path`, {
  stroke: 'white',
});
