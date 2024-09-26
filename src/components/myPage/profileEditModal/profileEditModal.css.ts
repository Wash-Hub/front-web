import { style } from '@vanilla-extract/css';

export const ProfileEditModalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  margin: 'auto',
});

export const ProfileEditModalForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const ProfileEditModalInputTitle = style({
  fontSize: '16px',
  fontWeight: '500',
  marginBottom: '5px',
  marginLeft: '14px',
  color: '#333',
});

export const ProfileEditModalInputImgLabelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '10px',
});

export const ProfileEditModalInputImg = style({
  width: '30%',
  height: '15vh',
  cursor: 'pointer',
  border: '1px solid #c0c0c0',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  color: '#666',
  backgroundColor: '#fafafa',
  ':hover': {
    backgroundColor: '#e9e9e9',
  },
});

export const ProfileEditModalInputImgLabel = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProfileEditModalInputImgIcon = style({
  fontSize: '24px',
  marginBottom: '5px',
  color: '#007BFF',
});

export const ProfileEditModalInputImgLabelImg = style({
  width: '40%',
  height: 'auto',
  borderRadius: '10px',
  objectFit: 'cover',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
});

export const ProfileEditModalButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '20px',
  paddingBottom: '10px',
});

export const ProfileEditModalInput = style({
  width: '90%',
  padding: '10px 15px',
  fontSize: '14px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '15px',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  ':focus': {
    borderColor: '#007BFF',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
  },
  '::placeholder': {
    color: '#aaa',
    fontStyle: 'italic',
  },
});

export const modalButton = {
  base: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  confirm: {
    backgroundColor: '#04befe',
    color: '#fff',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  cancel: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    color: 'black',
    ':hover': {
      backgroundColor: '#f5f5f5',
    },
  },
};
