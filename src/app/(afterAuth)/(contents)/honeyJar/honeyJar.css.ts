import { style } from '@vanilla-extract/css';

export const container = style({
  padding: 24,
});

export const bannerWrapper = style({
  display: 'flex',
  width: '100%',
  height: 320,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 24,
});

export const backgroundBanner = style({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
});

export const insertContentsWrapper = style({
  zIndex: 2,
  margin: 24,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const coupleProfileImageArea = style({
  display: 'flex',
  flexDirection: 'row',
});

export const eachProfileImageWrapper = style({
  width: 75,
  height: 75,
  margin: '0 15px',
  borderRadius: '50%',
  border: '2px solid #ffffff',
  backgroundColor: 'rgba(0, 255, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
});

export const coupleNickName = style({
  marginTop: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#ffffff',
});

export const coupleDescription = style({
  marginTop: '1rem',
  fontSize: '1rem',
  color: '#ffffff',
});
