import { style } from '@vanilla-extract/css';

export const sideBarMenuInfoReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  paddingBottom: '100px',
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
  width: '93%',
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

export const sideBarMenuInfoReviewInfoProfileDateWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1px',
});

export const sideBarMenuInfoReviewInfoProfileDate = style({
  fontSize: '12px',
  color: '#9e9e9e',
  fontWeight: 400,
  paddingRight: '0.5rem',
});

export const sideBarMenuInfoDeleteIcon = style({
  cursor: 'pointer',
  color: '#ff6b6b',
  transition: 'color 0.3s ease',
  ':hover': {
    color: '#ff3b3b',
  },
});

export const sideBarMenuInfoReviewInfoContent = style({
  fontSize: '12px',
  paddingBottom: '5px',
});

export const sideBarMenuInfoReviewButtonContainer = style({
  bottom: '0',
  width: '330px',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'fixed',
  zIndex: 1,
  padding: '0 0 0.5% 0.6%',
  '@media': {
    '(max-width: 1600px)': {
      padding: '0 0 0.7% 0.9%',
    },
    '(max-width: 768px)': {
      bottom: '15%',
      right: '3%',
      width: '30%',
    },
  },
});

export const sideBarMenuInfoReviewButton = style({
  width: '100%',
  height: '50px',
  margin: '0 0 0 0',
  boxShadow: '0px 0px 5px 0px #e0e0e0',
  backgroundColor: '#04befe',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#fff',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const sideBarMenuInfoReviewImg = style({
  width: '90px',
  height: '110px',
  borderRadius: '10px',
  border: 'none',
});

export const imgModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
  content: {
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto',
    marginTop: '10%',
    borderRadius: '10px',
    border: '1px solid #C1C1BB',
    padding: '8px',
  },
};

export const noReview = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '20px 0 0 0',
  padding: '20px 0 0 0',
  textAlign: 'center',
});
