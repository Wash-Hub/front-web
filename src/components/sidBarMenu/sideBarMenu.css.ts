import { style } from '@vanilla-extract/css';

export const sidebarMenuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '350px',
  height: '100vh',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
  '@media': {
    '(max-width: 860px)': {
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  },
});

export const sidebarMenuItem = style({
  position: 'relative',
  width: '100%',
  top: '-70px',
});

export const sidebarMenuSearch = style({
  width: '360px',
  marginLeft: '30%',
  zIndex: '2',
  '@media': {
    '(max-width: 1600px)': {
      width: '300px',
      marginLeft: '18%',
    },
  },
});
