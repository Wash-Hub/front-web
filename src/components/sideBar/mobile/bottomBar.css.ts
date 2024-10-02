// BottomBar.css.ts
import { style } from '@vanilla-extract/css';

export const bottomBarWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '50px',
  width: '100%',
  backgroundColor: '#fff',
  borderTop: '1px solid #ccc',
  bottom: 0,
  left: 0,
  right: 0,
});

export const activeMenuDisplay = style({
  marginTop: '10px',
  fontSize: '14px',
  border: '1px solid #000',
});

export const bottomBarItem = style({
  textAlign: 'center',
  cursor: 'pointer',
});

export const bottomBarLogo = style({
  width: '35px',
  height: '35px',
  margin: '0',
  padding: '3px',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const bottomBarMenu = style({
  width: '100%',
  height: '100%',
  marginLeft: '9px',
});

export const pageBottomBarMenu = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  top: '0',
  width: 'fit-content',
  height: 'fit-content',
  zIndex: '2',
});
