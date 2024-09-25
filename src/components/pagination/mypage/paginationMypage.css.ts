// pagination.css.ts
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '16px 0',
});

export const ul = style({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const li = style({
  margin: '0 4px',
  borderRadius: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
});

export const move = style({
  cursor: 'pointer',
  color: '#888',
  padding: '8px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.3s ease',

  ':hover': {
    color: '#000',
  },
});

export const pageStyle = style({
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  fontSize: '14px',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  ':hover': {
    backgroundColor: '#f1f1f1',
    color: '#000',
  },
});

export const active = style({
  background: 'linear-gradient(to top, #87CEEB 0%, #00BFFF 100%)',
  color: '#fff',
  fontWeight: 'bold',
});

export const invisible = style({
  visibility: 'hidden',
});

export const paginationScrollbar = style({
  overflowY: 'scroll',
  overflowX: 'hidden',
});
