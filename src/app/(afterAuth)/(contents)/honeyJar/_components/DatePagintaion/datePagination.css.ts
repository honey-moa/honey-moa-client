import { createVar, style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '1rem',
});

export const selectOptionsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
});

export const choicePublicNPrivate = style({
  padding: 10,
  border: '2px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 10,
  fontSize: '1rem',
  outline: 'none',
});

export const changeYearWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const changeYearIcon = style({
  padding: '12px 15px',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'inherit',
  margin: '0 25px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: 'rgba(132, 132, 132, 0.1)',
  },
});

export const monthListWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
});

export const nowDateBgVar = createVar();
export const nowDateColorVar = createVar();
export const nowDateBgHoverVar = createVar();
export const eachMonth = style({
  padding: '8px 16px',
  fontSize: 16,
  border: 'none',
  backgroundColor: nowDateBgVar,
  color: nowDateColorVar,
  borderRadius: 25,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: nowDateBgHoverVar,
  },
});
