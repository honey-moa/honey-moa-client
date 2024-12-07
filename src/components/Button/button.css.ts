import { createVar, style } from '@vanilla-extract/css';

export const colorVar = createVar();
export const hoverColorVar = createVar();
export const fontColorVar = createVar();

export const container = style({
  border: 'none',
  borderRadius: 8,
  width: '100%',
  height: '100%',
  backgroundColor: colorVar,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: fontColorVar,
  padding: 16,
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: hoverColorVar,
  },
});

export const text = style({
  padding: '0 8px',
});

export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
