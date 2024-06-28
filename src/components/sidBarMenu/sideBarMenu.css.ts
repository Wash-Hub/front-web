import { style } from '@vanilla-extract/css';

export const sidebarMenuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '35vh',
  height: '100vh',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
});

export const sidebarMenuSearch = style({
  width: '37vh',
  marginLeft: '140%',
  position: 'absolute',
  top: '0',
  zIndex: '2',
});
