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
