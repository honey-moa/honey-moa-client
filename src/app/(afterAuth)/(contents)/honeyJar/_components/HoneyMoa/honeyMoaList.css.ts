import { style } from '@vanilla-extract/css';

export const monthTitle = style({
  fontSize: '1.5rem',
});

export const honeyListGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',
});
