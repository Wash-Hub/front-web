// Sidebar.css.ts
import { style } from '@vanilla-extract/css';

export const sidebarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  padding: '10px',
  paddingTop: '15px',
});

export const sidebarMainLogo = style({
  width: '40px',
  height: '40px',
  marginBottom: '60%',
  marginLeft: '1px',
});

export const sidebarLogo = style({
  width: '30px',
  height: '30px',
  marginBottom: '80%',
  marginLeft: '6px',
  cursor: 'pointer',
});

export const sideBarWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const sideBarMenu = style({
  width: '100%',
  height: '100%',
  marginLeft: '9px',
});
