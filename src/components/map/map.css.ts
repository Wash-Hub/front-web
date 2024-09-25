import { style } from '@vanilla-extract/css';

export const mapButton = style({
  position: 'absolute',
  // top: '1%',
  bottom: '3%',
  left: '47%',
  zIndex: 1,
  backgroundColor: '#04befe',
  // background: 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
  padding: '10px 25px',
  borderRadius: '25px',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'white',
  border: 'none',
  transition: 'transform 0.2s, box-shadow 0.2s',

  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
  },

  ':active': {
    transform: 'scale(0.98)',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
  },
});
