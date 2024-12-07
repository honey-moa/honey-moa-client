import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  height: '100dvh',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const linkButtonContainer = style({
  padding: '1rem',
});

export const svgColorVar = createVar();
export const svgColorHoverVar = createVar();
export const hoveringSvg = style({
  border: 'none',
  backgroundColor: 'inherit',
  padding: 16,
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: svgColorHoverVar,
  },
});

globalStyle(`${hoveringSvg}:hover path`, {
  stroke: svgColorVar,
  fill: svgColorVar,
});
