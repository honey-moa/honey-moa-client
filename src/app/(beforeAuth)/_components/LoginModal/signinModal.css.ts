import { globalStyle, style } from '@vanilla-extract/css';

export const backGround = style({
  position: 'fixed',
  width: '100dvw',
  height: '100%',
  maxWidth: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  top: 0,
  left: 0,
});

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ModalWrapper = style({
  padding: '1rem',
  backgroundColor: 'white',
  width: 450,
  borderRadius: '1rem',
  position: 'relative',
});

export const ModalHeaderContainer = style({
  display: 'flex',
  flexDirection: 'row',
});

export const siteIcon = style({
  width: 45,
  height: 45,
  borderRadius: '50%',
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden',
});

export const modalTitle = style({
  fontSize: '1.5rem',
  lineHeight: '1rem',
  padding: '0px 0px 0px 1rem',
});

export const closeButton = style({
  position: 'absolute',
  right: 15,
  top: 10,
  width: 25,
  height: 25,
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
});

export const inputLabel = style({
  fontSize: '1rem',
  padding: '0.5rem 0',
  color: '#374151',
});

export const textInput = style({
  outline: 'none',
  borderRadius: 8,
  border: '1px solid #E0E0E0',
  padding: '0.5rem 1rem',
});

export const subFunctionContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '1.5rem',
});

export const submitButtonContainer = style({
  marginTop: '1.5rem',
});

export const modalBottomContainer = style({
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const noId = style({
  color: '#6B7280',
  fontSize: '0.875rem',
  padding: '0 0.5rem',
});

export const LinkColorRed = style({
  fontSize: '0.875rem',
  color: '#F43F5E',
  margin: 'auto 0',
  cursor: 'pointer',
});

export const LoginIcon = style({});

globalStyle(`${LoginIcon} > path`, {
  stroke: 'white',
});
