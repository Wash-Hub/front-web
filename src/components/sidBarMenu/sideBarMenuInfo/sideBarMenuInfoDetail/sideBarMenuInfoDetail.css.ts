import { style } from '@vanilla-extract/css';

export const sideBarMenuInfoDetailContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  boxSizing: 'border-box',
  overflowY: 'scroll',
});

export const sidebarMenuImg = style({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '30px',
  border: '1px solid #e0e0e0',
});

export const sidebarMenuInfoDetail = style({
  display: 'flex',
  width: '100%',
  marginTop: '15px',
  alignItems: 'center',
  justifyContent: 'start',
  flexDirection: 'row',
});

export const sidebarMenuInfoDetailIcon = style({
  fontSize: '20px',
  marginRight: '10px',
});

export const sidebarMenuInfoDetailText = style({
  textAlign: 'start',
  fontSize: '14px',
  fontWeight: 'bold',
});

export const sidbarMenuInfoDetailButton = style({
  width: '100%',
  height: '50px',
  fontSize: '14px',
  borderRadius: '10px',
  border: '1px solid #e0e0e0',
  backgroundColor: '#f8f8f8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: '#e0e0e0',
  },
});
