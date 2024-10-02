import { style } from '@vanilla-extract/css';

export const sidebarMenuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
  overflowY: 'scroll',
  overflowX: 'hidden',
  scrollbarWidth: 'none',
});

export const sidebarMenuItem = style({
  position: 'relative',
  width: '100%',
  height: '100vh',
  top: '-70px',
  '@media': {
    '(max-width: 764px)': {
      width: '100vw',
      height: 'calc(100vh - 92px)',
    },
    '(max-width: 380px)': {
      height: 'calc(100vh - 92px)',
    },
  },
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
