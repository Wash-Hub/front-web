// BottomBar.css.ts
import { style } from '@vanilla-extract/css';

export const bottomBarWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  // height: '40px',
  width: '100%',
  backgroundColor: '#fff',
  borderTop: '1px solid #ccc',
  bottom: 0,
  left: 0,
  right: 0,
});

export const bottomBarItem = style({
  textAlign: 'center',
  cursor: 'pointer',
});

export const bottomBarLogo = style({
  width: '30px',
  height: '30px',
  margin: '0',
  padding: '0',
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
  // backgroundColor: '#fff',
});
