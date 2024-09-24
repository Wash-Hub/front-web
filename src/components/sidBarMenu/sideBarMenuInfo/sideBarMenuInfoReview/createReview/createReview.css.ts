import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const createReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '20px',
  paddingBottom: '70px',
});

export const createReviewForm = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '15px',
  paddingRight: '15px',
});

export const createReviewInput = style({
  width: '92%',
  height: '15vh',
  padding: '10px',
  fontFamily: 'Pretendard-Regular',
  marginBottom: '10px',
  border: '1px solid #c0c0c0',
  borderRadius: '5px',
});

export const createReviewUnderLine = style({
  width: '100%',
  border: '1px solid #c0c0c0',
  marginBottom: '10px',
  marginTop: '20px',
});

export const createReviewInputTitle = style({
  fontSize: '15px',
  fontWeight: 'bold',
  marginBottom: '10px',
  padding: '5px 0 0 3px',
});

export const createReviewInputImg = style({
  display: 'block',
  width: '25%',
  height: '12vh',
  cursor: 'pointer',
  border: '1px solid #c0c0c0',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'center',
  fontSize: '10px',
});

export const createReviewInputImgLabel = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '25%',
});

export const createReviewInputImgLabelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const createReviewInputImgLabelImg = style({
  width: '90px',
  height: '110px',
  borderRadius: '10px',
  marginLeft: '10px',
});

export const createReviewInputImgIcon = style({
  fontSize: '20px',
  marginBottom: '7px',
});

export const createReviewButtonContainer = style({
  bottom: '0',
  width: '95%',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: 1,
  padding: '0 0 10px 0',
});

export const createReviewButton = recipe({
  base: {
    width: '65%',
    height: '50px',
    margin: '0 0 5px 5px',
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
  },
  variants: {
    width: {
      regist: {
        width: '65%',
      },
      cancle: {
        width: '25%',
      },
    },
  },
});

export const closeModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '25%',
    height: 'fit-content',
    margin: 'auto',
    marginTop: '15%',
    borderRadius: '12px',
    border: '1px solid #E0E0E0',
    padding: '1.5rem',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
  },
};
