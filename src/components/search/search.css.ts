import { style } from '@vanilla-extract/css';

export const searchContainer = style({
  paddingTop: '5%',
  width: '100%',
});

export const searchWrapper = style({
  display: 'flex',
  width: '70%',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '5px',
  borderRadius: '20px',
  backgroundColor: 'white',
  border: '1px solid #e0e0e0',
  '@media': {
    '(max-width: 1600px)': {
      width: '80%',
    },
  },
});

export const searchInput = style({
  padding: '10px',
  border: 'none',
  borderRadius: '20px',
  outline: 'none',
});

export const searchButton = style({
  fontSize: '17px',
  paddingTop: '5px',
  width: 'fit-content',
  border: 'none',
  backgroundColor: 'white',
  borderRadius: '20px',
  cursor: 'pointer',
  outline: 'none',
});
