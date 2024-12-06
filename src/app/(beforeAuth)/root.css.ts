import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '80rem',
  padding: '3rem 1.5rem',
  margin: '0 auto',
});

export const contents = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const left = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const slogan = style({
  fontSize: '3rem',
  lineHeight: 1,
  fontWeight: 700,
  marginBottom: '1.5rem',
});

export const subSlogan = style({
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  marginBottom: '1.5rem',
});

export const buttonContainer = style({
  width: 160,
});

export const ArrowIcon = style({});
globalStyle(`${ArrowIcon} > path`, {
  stroke: 'white',
});

export const right = style({
  flex: 1,
});

export const imageRelative = style({
  position: 'relative',
  width: '100%',
  height: '100dvh',
  borderRadius: 16,
  overflow: 'hidden',
});
