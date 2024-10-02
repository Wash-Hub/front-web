import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const createReviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '20px',
  paddingBottom: '70px',
  alignItems: 'center',
});

export const createReviewForm = style({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  maxWidth: '600px',
  padding: '0 20px',
  marginBottom: '20px',
});

export const createReviewInput = style({
  width: '100%',
  height: '150px',
  padding: '12px 15px',
  fontFamily: 'Pretendard-Regular',
  marginBottom: '20px',
  border: '1px solid #d0d0d0',
  borderRadius: '8px',
  resize: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  ':focus': {
    borderColor: '#007BFF',
    boxShadow: '0 0 6px rgba(0, 123, 255, 0.2)',
  },
  '::placeholder': {
    color: '#a0a0a0',
  },
});

export const createReviewInputTitle = style({
  fontSize: '16px',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#333',
  paddingLeft: '5px',
});

export const createReviewUnderLine = style({
  width: '100%',
  border: '1px solid #ddd',
  marginBottom: '20px',
});

export const createReviewInputImgLabelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '15px',
});

export const createReviewInputImg = style({
  display: 'block',
  width: '35%',
  height: '120px',
  cursor: 'pointer',
  border: '2px dashed #ccc',
  borderRadius: '12px',
  textAlign: 'center',
  fontSize: '12px',
  transition: 'border-color 0.3s ease',
  ':hover': {
    borderColor: '#007BFF',
  },
});

export const createReviewInputImgLabel = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const createReviewInputImgIcon = style({
  fontSize: '24px',
  color: '#007BFF',
  marginBottom: '8px',
});

export const createReviewInputImgLabelImg = style({
  width: '35%',
  height: '13vh',
  borderRadius: '10px',
  margin: '0 0 0 5%',
  objectFit: 'cover',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
});

export const createReviewButtonContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px 0',
});

export const createReviewButton = recipe({
  base: {
    height: '50px',
    padding: '0 20px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  variants: {
    width: {
      regist: {
        width: '55%',
        backgroundColor: '#04befe',
        color: '#fff',
        ':hover': {
          backgroundColor: '#0056b3',
        },
      },
      cancle: {
        width: '40%',
        backgroundColor: 'white',
        color: 'black',
        ':hover': {
          backgroundColor: '#f0f0f0',
        },
      },
    },
  },
});

export const closeModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
  content: {
    height: 'fit-content',
    margin: 'auto',
    marginTop: '15%',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
  },
};
