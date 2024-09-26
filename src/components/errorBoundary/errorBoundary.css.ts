import { style } from '@vanilla-extract/css';

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#e0f7fa',
  textAlign: 'center',
  padding: '0 20px',
  boxSizing: 'border-box',
});

export const animationWrapper = style({
  margin: 0,
  padding: 0,
});

export const errorMessage = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#0277bd',
  marginBottom: '1.5rem',
  lineHeight: '1.2',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
});

export const errorButton = style({
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  backgroundColor: '#29b6f6',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(41, 182, 246, 0.5)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  ':hover': {
    backgroundColor: '#0288d1',
    boxShadow: '0 6px 12px rgba(2, 136, 209, 0.5)',
  },
  ':active': {
    backgroundColor: '#01579b',
  },
});
