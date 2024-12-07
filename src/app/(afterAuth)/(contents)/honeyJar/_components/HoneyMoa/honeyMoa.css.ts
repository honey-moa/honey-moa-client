import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 16,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 12,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
  },
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const contentImageWrapper = style({
  width: '100%',
  height: 192,
  backgroundColor: 'gray',
  position: 'relative',
  borderRadius: 12,
  overflow: 'hidden',
});
