import { style } from '@vanilla-extract/css';

export const sideBarMenuInfoReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
});

export const sideBarMenuInfoReviewInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '0.5rem',
});

export const sideBarMenuInfoReviewInfo = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%',
  paddingBottom: '0.5rem',
});

export const sideBarMenuInfoReviewInfoProfile = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2px',
  fontSize: '14px',
  fontWeight: 'bold',
});

export const sideBarMenuInfoReviewInfoImg = style({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  marginRight: '0.5rem',
  border: '1px solid black',
});

export const sideBarMenuInfoReviewInfoProfileDate = style({
  fontSize: '12px',
  color: '#9e9e9e',
});

export const sideBarMenuInfoReviewInfoContent = style({
  fontSize: '12px',
});

export const sideBarMenuInfoReviewButtonContainer = style({
  bottom: '0',
  width: '40vh',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: 1,
  padding: '0 0 9% 16%',
});

export const sideBarMenuInfoReviewButton = style({
  width: '100%',
  height: '50px',
  margin: '0 0 0 0',
  boxShadow: '0px 0px 5px 0px #e0e0e0',
  backgroundColor: '#f5f5f5',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});
